# Decisiones técnicas (ADR liviano)

## Stack
- **Node + TypeScript**: ecosistema común en industria y fácil de reproducir
- **Vite**: build rápido para demo y salida estática (`dist/`) ideal para Pages
- **Vitest**: tests + coverage con buena performance

## CI con matriz
Se elige Node 20/22 para:
- compatibilidad
- detección temprana de issues por versión

## Umbral de cobertura
Se incorpora como "quality gate" para que los tests no queden decorativos.

## Seguridad “de industria”
Se suman CodeQL + dependency review + dependabot por relevancia real en repos modernos.

---

## Laboratorio basado en observación segura

Durante el desarrollo de este trabajo se consideró incluir ejemplos de código intencionalmente vulnerable para demostrar las capacidades de las herramientas de seguridad.

Sin embargo, se optó por un enfoque diferente: **un laboratorio basado en observación e interpretación de resultados**.

### Motivos de esta decisión

1. **Objetivo educativo**

El objetivo principal del laboratorio es aprender a interpretar correctamente los resultados generados por herramientas como CodeQL y Dependency Review.

2. **Evitar introducir código inseguro en el repositorio principal**

Mantener el repositorio libre de código intencionalmente vulnerable facilita su reutilización y evita posibles malas interpretaciones.

3. **Priorizar el análisis y la corrección conceptual**

El laboratorio se enfoca en entender:

- qué detectan las herramientas
- cómo interpretar los hallazgos
- qué tipo de problemas buscan preveni