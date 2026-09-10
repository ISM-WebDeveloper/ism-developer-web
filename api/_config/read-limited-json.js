// El límite se aplica a los bytes recibidos, incluso sin Content-Length.
export async function readLimitedJson(request, limit) {
    const tooLarge = () => Object.assign(new Error("Solicitud demasiado grande."), { status: 413 });
    if (Number(request.headers.get("content-length")) > limit) throw tooLarge();
    if (!request.body) throw new SyntaxError("Solicitud JSON inválida.");

    const reader = request.body.getReader();
    const chunks = [];
    let size = 0;
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            size += value.byteLength;
            if (size > limit) {
                await reader.cancel().catch(() => {});
                throw tooLarge();
            }
            chunks.push(value);
        }
    } finally {
        reader.releaseLock();
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.byteLength;
    }
    return JSON.parse(new TextDecoder().decode(bytes));
}
