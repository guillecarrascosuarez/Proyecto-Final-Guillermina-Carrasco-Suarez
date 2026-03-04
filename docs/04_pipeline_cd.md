# Pipeline de CD (Continuous Deployment) a GitHub Pages

## Objetivo
Desplegar automáticamente el sitio estático **solo** si el CI fue exitoso.

## Workflow
Archivo: `.github/workflows/cd-pages.yml`

### Estrategia
- Se dispara con `workflow_run` cuando el workflow **CI** termina
- Si `conclusion == success`:
  - corre `npm ci`
  - corre `npm run build`
  - publica `dist/` en GitHub Pages

## Activación en GitHub
1. `Settings → Pages`
2. “Build and deployment” → **GitHub Actions**
3. Push a `main` y revisar Actions

## Acción práctica (reproducible)
Generar el build local para ver qué se despliega:
```bash
npm ci
npm run build
npm run preview
```
Luego visitar `http://localhost:4173`.

## Relación con el laboratorio de seguridad

El laboratorio de seguridad incluido en la rama `laboratorio-seguridad` **no modifica el proceso de despliegue continuo (CD)**.

El objetivo del laboratorio es observar el funcionamiento de las herramientas de análisis de seguridad, no alterar el flujo de despliegue.

En este proyecto el despliegue sigue un principio fundamental de CI/CD:

> **El despliegue solo ocurre cuando la integración continua finaliza correctamente.**

Esto funciona como un **quality gate**:

- si CI falla → no hay despliegue
- si los controles de calidad fallan → no hay despliegue
- si los análisis detectan problemas críticos → el flujo se detiene

Este mecanismo evita que código potencialmente defectuoso llegue al entorno de publicación.