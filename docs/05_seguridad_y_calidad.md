# Seguridad y calidad

## Dependency Review
Workflow: `.github/workflows/dependency-review.yml`

En PR, inspecciona cambios de dependencias y falla si se detectan vulnerabilidades severas.

## Dependabot
Archivo: `.github/dependabot.yml`

Crea PRs automáticas semanales para actualizar dependencias y reducir deuda técnica.

## CodeQL (SAST)
Workflow: `.github/workflows/codeql.yml`

Ejecuta análisis estático y reporta hallazgos en la pestaña Security.
Incluye `schedule` semanal para reevaluar con nuevas reglas.

## Buenas prácticas incorporadas
- `npm ci` para instalaciones determinísticas
- Matriz de Node versions
- `concurrency` para cancelar ejecuciones redundantes
- Artifacts para trazabilidad

## Laboratorio guiado (rama `laboratorio-seguridad`)

Con el objetivo de complementar el análisis automático de seguridad, el repositorio incluye una **rama especial denominada `laboratorio-seguridad`**.

Esta rama contiene material educativo diseñado para ayudar a **comprender e interpretar los resultados generados por las herramientas de análisis de seguridad integradas en el pipeline**.

### Objetivo

El objetivo del laboratorio es aprender a interpretar correctamente:

- hallazgos reportados por **CodeQL**
- resultados de **Dependency Review** en Pull Requests
- alertas visibles en la pestaña **Security** del repositorio

El enfoque es **educativo y observacional**, orientado a comprender cómo funcionan las herramientas de análisis de seguridad dentro de un pipeline CI/CD moderno.

### Qué se encuentra en el laboratorio

La rama `laboratorio-seguridad` incluye:

- una guía paso a paso para observar resultados de seguridad
- ejemplos de cómo interpretar reportes de CodeQL
- explicación de cómo GitHub analiza cambios de dependencias
- recomendaciones sobre cómo abordar y corregir hallazgos

No se incluyen ejemplos de explotación ni código diseñado para ser utilizado de forma insegura.

### Cómo utilizar el laboratorio

1. Cambiar a la rama del laboratorio:

```bash
git checkout laboratorio-seguridad