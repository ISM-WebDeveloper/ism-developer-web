# Hotfix 4A.13.2 — restauración de snapshot `public`

Corrige el restore local cuando las migraciones ya insertan datos estáticos (por ejemplo, catálogo 2.3) que también existen en `public-data.sql`.

## Cambio

Después de `supabase db reset --local --no-seed`, el restore vacía **sólo las tablas del schema `public`** con `TRUNCATE ... RESTART IDENTITY CASCADE` y luego carga el snapshot completo respaldado.

- Auth no se trunca.
- Storage no se trunca por este paso.
- Producción no se toca.
- No cambia migraciones ni RLS.
- Permite restaurar exactamente el estado capturado sin duplicar filas recreadas por migraciones.
