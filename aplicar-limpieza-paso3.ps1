$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Package = Join-Path $Root "package.json"
$List = Join-Path $Root "ARCHIVOS_ELIMINADOS_PASO3.txt"

if (-not (Test-Path -LiteralPath $Package -PathType Leaf)) {
    throw "Ejecuta este script desde la raiz del proyecto ISM Developer, donde existe package.json."
}
if (-not (Test-Path -LiteralPath $List -PathType Leaf)) {
    throw "No se encontro ARCHIVOS_ELIMINADOS_PASO3.txt."
}

$Removed = 0
$AlreadyMissing = 0
Get-Content -LiteralPath $List | ForEach-Object {
    $Relative = $_.Trim()
    if (-not $Relative) { return }
    $NativeRelative = $Relative -replace '/', [IO.Path]::DirectorySeparatorChar
    $FullPath = Join-Path $Root $NativeRelative
    if (Test-Path -LiteralPath $FullPath -PathType Leaf) {
        Remove-Item -LiteralPath $FullPath -Force
        $Removed++
    } else {
        $AlreadyMissing++
    }
}

Write-Host "Paso 3 aplicado correctamente." -ForegroundColor Green
Write-Host "Archivos eliminados: $Removed"
Write-Host "Archivos que ya no existian: $AlreadyMissing"
Write-Host "Ahora ejecuta: npm run validate"
