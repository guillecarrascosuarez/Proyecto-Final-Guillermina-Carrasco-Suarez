# CI/CD con GitHub Actions + GitHub Pages (Node + TypeScript) por Guillermina Carrasco Suárez

Este repositorio es un trabajo práctico sobre **CI/CD con GitHub Actions** aplicado a un proyecto **Node + TypeScript** (Vite), con foco en:

- **CI**: lint + verificación de formato + pruebas + cobertura (con umbral) + build + artifacts (**matriz Node 20/22**)
- **Seguridad**: **CodeQL (SAST)**, **Dependency Review**, **Dependabot**
- **CD**: despliegue automático a **GitHub Pages** cuando el CI termina OK
- **Buenas prácticas**: configuración como código, trazabilidad con artifacts y documentación en Markdown

> Toda la explicación teórica/práctica está en `docs/`.

---

## Requisitos

- **Git**
- **Node.js 20+** (recomendado: **22**)
- **npm** (incluido con Node)

### Verificar versiones

```bash
node -v
npm -v
git --version
```

---

## Ejecutar en local

```bash
# 1) instalar dependencias
npm install

# 2) desarrollo
npm run dev

# 3) calidad
npm run lint
npm run formato:verificar

# 4) pruebas + cobertura
npm run pruebas:cobertura
npm run verificar:cobertura

# 5) build
npm run build

# 6) previsualizar build
npm run preview
```

---

## Pipelines en GitHub Actions (qué vas a ver)

- **CI** (`.github/workflows/ci.yml`): se ejecuta en `pull_request` y `push` a `main`
- **CodeQL** (`.github/workflows/codeql.yml`): análisis estático en PR/push + schedule semanal
- **Dependency Review** (`.github/workflows/dependency-review.yml`): revisa dependencias en PR
- **Release** (`.github/workflows/release.yml`): releases automáticas con `semantic-release` (opcional)
- **CD Pages** (`.github/workflows/cd-pages.yml`): despliegue a Pages cuando el CI termina OK

---

## Documentación

La documentación completa del proyecto se encuentra en la carpeta `docs/` y describe tanto los aspectos conceptuales como prácticos del pipeline CI/CD implementado.

- Introducción: `docs/01_introduccion.md`
- Conceptos de CI/CD: `docs/02_conceptos_cicd.md`
- Pipeline de Integración Continua: `docs/03_pipeline_ci.md`
- Pipeline de Despliegue Continuo: `docs/04_pipeline_cd.md`
- Seguridad y calidad del código: `docs/05_seguridad_y_calidad.md`
- Observabilidad y artefactos: `docs/06_observabilidad_y_artefactos.md`
- Decisiones técnicas: `docs/07_decisiones.md`
- Reproducir el proyecto en local: `docs/08_reproducir_en_local.md`
- Bitácora de investigación y desarrollo: `docs/09_bitacora.md`
- **Laboratorio de seguridad:** `docs/10_laboratorio_seguridad.md` _(rama `laboratorio-seguridad`)_

---

## Ramas del repositorio

- **main:** contiene la versión estable del proyecto y la implementación completa del pipeline CI/CD.

- **laboratorio-seguridad:** rama utilizada con fines educativos para guiar la observación e interpretación de resultados generados por herramientas de análisis de seguridad como CodeQL y Dependency Review.
