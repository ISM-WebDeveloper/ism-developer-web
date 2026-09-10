import assert from 'node:assert/strict';
import { readLimitedJson } from '../api/_config/read-limited-json.js';
import guide from '../api/pre-cotizacion.js';
import configurator from '../api/configurador-cotizacion.js';
const url = 'https://example.test/api/prequote';
const request = (body, headers = {}) => new Request(url, {method:'POST',body,headers});
let checks = 0;
const equal = (a,b) => {assert.deepEqual(a,b); checks++;};
equal(await readLimitedJson(request('{"ok":true}'), 11), {ok:true});
await assert.rejects(readLimitedJson(request('{'), 48000), SyntaxError); checks++;
await assert.rejects(readLimitedJson(request(JSON.stringify('ñ'.repeat(24000))),48000), {status:413});checks++;
let cancelled=false;
const stream = new ReadableStream({start(c){c.enqueue(new Uint8Array(24000));c.enqueue(new Uint8Array(24001));},cancel(){cancelled=true;}});
await assert.rejects(readLimitedJson(new Request(url,{method:'POST',body:stream,duplex:'half'}),48000),{status:413});checks++;
equal(cancelled,true);
const originalFetch=globalThis.fetch;
globalThis.fetch=()=>{throw new Error('Ninguna prueba debe llamar servicios externos');};
try {
  for(const api of [guide,configurator]) {
    equal((await api.fetch(new Request(url))).status,405);
    equal((await api.fetch(new Request(url,{method:'OPTIONS'}))).status,204);
    equal((await api.fetch(request('{'))).status,400);
    equal((await api.fetch(request('{}'))).status,400);
    equal((await api.fetch(request(JSON.stringify({padding:'x'.repeat(48000)})))).status,413);
    equal((await api.fetch(request(JSON.stringify({padding:'x'.repeat(48000)}),{'Content-Length':'1'}))).status,413);
    equal((await api.fetch(request('{}',{'Content-Length':'48001'}))).status,413);
  }
} finally {globalThis.fetch=originalFetch;}
console.log(`Límites de payload: ${checks} comprobaciones aprobadas; sin conexiones externas.`);
