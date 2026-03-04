# Bitácora de investigación y desarrollo

Esta bitácora describe el proceso seguido para investigar, diseñar e implementar el sistema de CI/CD presentado en este repositorio.  
Se organiza por **etapas de trabajo**, reflejando un proceso progresivo de aprendizaje, experimentación y consolidación.

El objetivo de esta sección es mostrar cómo se fue **construyendo conocimiento práctico** sobre integración continua y despliegue continuo utilizando GitHub Actions.

---

# Etapa 1 — Exploración inicial del problema (≈ 3 días)

Primero se investigaron los conceptos fundamentales de:

- Integración continua (CI)
- Despliegue continuo (CD)
- Automatización de builds
- Automatización de pruebas

Se revisaron distintas herramientas posibles:

- Jenkins
- GitLab CI
- GitHub Actions

Finalmente se eligió **GitHub Actions** porque:

- Está integrado directamente con los repositorios
- Permite definir pipelines como código
- Tiene una sintaxis relativamente simple

Durante esta etapa también se analizaron ejemplos reales de repositorios open source que utilizan CI/CD.

---

# Etapa 2 — Definición del alcance técnico (≈ 2 días)

Se definió que el proyecto debía demostrar:

- Pipeline de integración continua completo
- Ejecución automática de pruebas
- Control de calidad del código
- Análisis de seguridad
- Generación de artefactos
- Despliegue automático

Se decidió utilizar el siguiente stack tecnológico:

- **Node.js**
- **TypeScript**
- **Vite**
- **Vitest**
- **ESLint**
- **Prettier**

Esto permitía construir un ejemplo simple pero realista.

---

# Etapa 3 — Construcción del proyecto base (≈ 4 días)

En esta fase se creó el proyecto base:

- configuración de Node + TypeScript
- estructura de carpetas
- módulo simple de ejemplo (`sum.ts`)
- pruebas unitarias con Vitest

El objetivo era contar con un proyecto mínimo pero funcional que pudiera ser utilizado para demostrar el pipeline.

También se implementó la generación de **cobertura de código**.

---

# Etapa 4 — Implementación del pipeline de CI (≈ 6 días)

Luego se diseñó el pipeline de **Integración Continua**.

Este pipeline incluye:

1. instalación de dependencias
2. verificación de lint
3. verificación de formato
4. ejecución de pruebas
5. medición de cobertura
6. build del proyecto

Además se agregaron varias mejoras:

- ejecución en **múltiples versiones de Node**
- subida de **artefactos de cobertura**
- subida de **artefactos del build**
- cancelación de ejecuciones redundantes

Estas decisiones siguen prácticas utilizadas en proyectos reales.

---

# Etapa 5 — Seguridad del pipeline (≈ 4 días)

Posteriormente se investigaron herramientas de seguridad integradas en GitHub.

Se añadieron:

## CodeQL

Permite análisis estático de seguridad del código.

Se ejecuta:

- en cada Pull Request
- en cambios en la rama principal
- periódicamente

## Dependency Review

Analiza cambios en dependencias dentro de Pull Requests.

Si detecta vulnerabilidades severas el pipeline falla.

## Dependabot

Se configuró para:

- revisar dependencias semanalmente
- generar Pull Requests automáticos de actualización

---

# Etapa 6 — Implementación del despliegue continuo (≈ 5 días)

Se implementó el pipeline de **Despliegue Continuo (CD)**.

El objetivo fue publicar automáticamente el sitio generado por Vite.

El proceso es:

1. CI finaliza correctamente
2. se dispara el workflow de despliegue
3. se genera el build
4. se publica el directorio `dist/` en GitHub Pages

Esto demuestra un flujo completo:

código → pruebas → build → despliegue automático

---

# Etapa 7 — Observabilidad y artefactos (≈ 3 días)

Para facilitar el análisis del pipeline se incorporaron:

- artefactos de cobertura
- artefactos del build
- reportes descargables desde GitHub Actions

Esto permite inspeccionar los resultados del pipeline sin ejecutar el proyecto localmente.

---

# Etapa 8 — Documentación reproducible (≈ 3 días)

Finalmente se elaboró la documentación del repositorio.

Se priorizó:

- explicación conceptual del pipeline
- instrucciones reproducibles
- justificación de decisiones técnicas

El objetivo fue que **cualquier lector pueda clonar el repositorio y reproducir el proceso completo**.

Se utilizó **Gemini** para hacer los markdowns más estéticos con encabezados jerárquicos, negritas, cursivas, etc.

---

# Etapa 9 — Laboratorio de seguridad e interpretación de hallazgos (≈ 3 días)

En esta etapa final se diseñó un **laboratorio guiado** para facilitar la comprensión de las herramientas de análisis de seguridad integradas en el pipeline.

Se investigó el funcionamiento de:

- **CodeQL** para análisis estático de seguridad
- **Dependency Review** para análisis de dependencias
- la pestaña **Security** de GitHub

Durante esta fase se revisaron reportes generados por las herramientas y se analizó cómo interpretar:

- severidad de alertas
- ubicación de los problemas en el código
- recomendaciones generadas por las herramientas

A partir de esta investigación se construyó una guía práctica incluida en la rama:

`laboratorio-seguridad`

El objetivo del laboratorio es permitir que un lector pueda observar cómo funcionan las herramientas de seguridad dentro de un pipeline CI/CD real.
