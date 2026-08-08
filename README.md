# ISM Developer Web · v2.0.0

Sitio oficial, portafolio interactivo y configurador de servicios de ISM Developer.

## Publicación

La aplicación principal es un sitio estático multipágina y el configurador compilado se publica desde `configurador/`.

```text
index.html                 Landing principal
portafolio.html            Portafolio detallado
privacidad.html            Política de privacidad
servicios.html             Redirección compatible a #servicios
configurador/              Build público del configurador
assets/                    CSS, JavaScript, imágenes e iconos públicos
manifest.webmanifest       Manifest del sitio
robots.txt                 Directivas para buscadores
sitemap.xml                Sitemap público
vercel.json                Cabeceras, CSP y caché de producción
.vercelignore              Excluye fuentes y documentación del despliegue
```

El código fuente del configurador permanece en `apps/configurador-servicios/` para desarrollo y reconstrucción, pero `.vercelignore` evita publicarlo como recurso estático.

## Desarrollo local

```powershell
npm run dev
```

Servidor local: `http://127.0.0.1:4173`.

## Auditoría

```powershell
npm run validate
```

Ejecuta validación de sintaxis y referencias, presupuesto de rendimiento, seguridad/privacidad, accesibilidad y compatibilidad moderna.
