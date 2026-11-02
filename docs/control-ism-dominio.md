# Dominio oficial de ISM Proyect

Fecha de implementación: 2026-11-02.

La web comercial y la plataforma conservan proyectos independientes de Vercel.
El dominio `control.ismdeveloper.cl` está asignado al proyecto `ism-proyect`
del mismo equipo que administra `ism-developer-web` y `ismdeveloper.cl`.
Vercel confirmó la propiedad y la configuración DNS sin conflictos. Se comprobó
la carga de `/login` por HTTPS, sin advertencias de certificado.

## Direcciones

- Administración: `https://control.ismdeveloper.cl/login?acceso=administrador`.
- Propuestas: `https://control.ismdeveloper.cl/prospect`.
- Clientes: `https://control.ismdeveloper.cl/portal`.
- Atajo de la web: `/control` redirige al login del dominio oficial.
- `/control/:path*` conserva el resto de la ruta al redirigir al subdominio.

Las redirecciones son temporales (307), permitiendo revertir la migración sin
depender de cachés permanentes. El menú Portal sigue llevando a la sección
pública de accesos; sus dos enlaces usan el nuevo dominio.

## Alcance y compatibilidad

No se fusionan repositorios ni se duplican bases de datos. La aplicación ya
utiliza rutas relativas y `window.location.origin` para la recuperación, por lo
que el subdominio no necesita un cambio del router ni de las credenciales.
Se conserva `ism-proyect.vercel.app` para enlaces anteriores de acceso. Las
sesiones guardadas en el origen anterior no se trasladan automáticamente al
nuevo. La gestión de invitaciones debe realizarse desde el dominio oficial,
porque sus funciones comprueban ese origen.

El DNS existente de Vercel resuelve el subdominio. No se cambiaron nameservers,
MX, SPF, DKIM, DMARC ni los registros de correo.

## Supabase: configuración que acompaña al dominio

Proyecto de la plataforma: `sowxwaqcnpbrpbkbltdq`.

- Site URL: `https://control.ismdeveloper.cl`.
- Autorizar las rutas exactas `/reset-password`, `/portal/reset-password`,
  `/prospect/reset-password`, `/portal/activate` y `/prospect/activate` del nuevo
  dominio, conservando las URLs válidas anteriores.
- Actualizar únicamente `CLIENT_PORTAL_SITE_URL` a
  `https://control.ismdeveloper.cl` en los secretos de Edge Functions. Este
  valor se utiliza en invitaciones, recordatorios y sus comprobaciones de origen.
- No cambiar claves, contraseñas, SMTP, políticas de acceso ni tablas.

## Comprobaciones

- Dominio oficial verificado en Vercel y acceso por HTTPS comprobado.
- Site URL guardada y cinco redirecciones nuevas verificadas tras recargar
  Supabase; se conservan las cinco anteriores.
- `CLIENT_PORTAL_SITE_URL` actualizado; el digest coincide con el valor previsto.
- Peticiones OPTIONS a las funciones de invitación de clientes y prospectos:
  ambas responden 200 y permiten `https://control.ismdeveloper.cl`.
- `/prospect` y `/portal` conducen al login con el tipo de acceso correspondiente.
- `npm run validate` aprobado, incluidos rendimiento, seguridad, accesibilidad,
  compatibilidad y comprobación de los recursos generados.

La prueba real con una cuenta y la recuperación por correo requieren la
participación de su titular; no se generaron invitaciones ni mensajes a clientes
durante la comprobación del dominio. No se ha probado una sesión autenticada
de administración, cliente o prospecto.
