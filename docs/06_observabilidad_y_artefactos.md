# Observabilidad y artifacts

## Artifacts

El CI sube:

- `coverage/` (HTML + summary)
- `dist/` (build)

Esto permite:

- auditar resultados de CI
- inspeccionar cobertura sin correr localmente
- comparar builds entre ejecuciones

## Qué mirar en GitHub

- pestaña **Actions** → ejecución → sección **Artifacts**
- reportes descargables para análisis
