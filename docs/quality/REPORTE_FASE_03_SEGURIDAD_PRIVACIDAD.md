# Reporte de cierre 10/10 · Fase 3

## Alcance

Esta fase atiende los hallazgos:

- **H-007 · Seguridad:** encabezados HTTP no documentados ni verificados.
- **H-008 · Privacidad:** Google Analytics se cargaba sin una política pública ni una elección visible.

La implementación es una base técnica y documental. La verificación definitiva de encabezados debe realizarse después del despliegue en Vercel y la política puede requerir revisión jurídica especializada según el uso futuro del sitio.

## 1. Encabezados de seguridad

Se incorporó `vercel.json` con:

- Content-Security-Policy.
- Strict-Transport-Security.
- Referrer-Policy.
- Permissions-Policy.
- X-Content-Type-Options.
- X-Frame-Options.
- Cross-Origin-Opener-Policy.
- X-Permitted-Cross-Domain-Policies.

La CSP restringe por defecto los recursos al mismo origen, impide objetos embebidos y framing, fuerza solicitudes HTTPS y permite únicamente los dominios requeridos por Google Analytics y los iconos externos existentes.

El JSON-LD de la portada se autoriza mediante un hash SHA-256 específico. `npm run audit:security` recalcula ese hash y falla si el contenido cambia sin actualizar la CSP.

## 2. Consentimiento y Google Analytics

Se implementó un modo de consentimiento básico:

1. Las cuatro señales de consentimiento comienzan en `denied`.
2. Google Analytics no se descarga antes de una aceptación explícita.
3. `ad_storage`, `ad_user_data` y `ad_personalization` permanecen denegados siempre.
4. Solo `analytics_storage` puede activarse mediante la decisión del visitante.
5. La elección queda registrada localmente para no repetir el aviso en cada visita.
6. El usuario puede reabrir las preferencias desde la portada, el portafolio y la política.
7. Al rechazar, se intentan eliminar las cookies analíticas conocidas del dominio.

## 3. Política de privacidad

Se agregó `privacidad.html` como URL estable y enlazable. Documenta:

- Responsable y canal de contacto.
- Datos solicitados en el formulario.
- Funcionamiento real del formulario mediante WhatsApp.
- Analítica opcional.
- Servicios de terceros.
- Finalidades.
- Gestión del consentimiento.
- Consultas y derechos.
- Seguridad, conservación y actualizaciones.

## 4. Auditorías automáticas

Se incorporó:

```bash
npm run audit:security
```

Y `npm run validate` ahora ejecuta:

- Sintaxis JavaScript.
- Validación de cuatro páginas.
- Presupuesto de rendimiento.
- Auditoría de seguridad y privacidad.

Resultado local:

```text
4 páginas
0 errores
0 advertencias
Presupuesto de rendimiento aprobado
Auditoría de seguridad y privacidad aprobada
```

## 5. Comprobación posterior al despliegue

Ejecutar:

```bash
curl -I https://www.ismdeveloper.cl/
curl -I https://www.ismdeveloper.cl/portafolio.html
curl -I https://www.ismdeveloper.cl/privacidad.html
```

Confirmar la presencia de los encabezados configurados.

En una ventana privada del navegador:

1. Abrir el sitio y no aceptar estadísticas.
2. Verificar en Network que no se descargue `gtag/js`.
3. Aceptar estadísticas.
4. Verificar que se cargue Google Analytics.
5. Reabrir preferencias y rechazar.
6. Comprobar que el sitio sigue funcionando y que la elección queda actualizada.

## 6. Estado de los hallazgos

- **H-007:** implementado en código; pendiente verificar los encabezados reales tras el despliegue.
- **H-008:** cerrado técnicamente; pendiente revisar la configuración de retención dentro de la propiedad de Google Analytics y, si corresponde, revisión legal de la política.

## Próxima fase

**Fase 4 · Accesibilidad WCAG 2.2 AA:** teclado, foco, contraste, zoom, formularios, diálogos, acordeones y pruebas asistivas.
