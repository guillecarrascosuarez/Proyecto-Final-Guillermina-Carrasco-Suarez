# Pipeline de CI (Continuous Integration)

## Objetivo

Asegurar calidad mínima antes de aceptar cambios:

- Lint (estática)
- Formato consistente
- Tests automatizados + cobertura
- Build reproducible
- Artifacts para auditoría

## Workflow

Archivo: `.github/workflows/ci.yml`

### Eventos

- `pull_request`: valida cambios antes de mergear
- `push` a `main`: valida el branch principal

### Matriz

Se corre en Node 20 y 22 para detectar incompatibilidades.

## Acciones prácticas (reproducibles)

En local, correr lo mismo que CI:

```bash
npm ci
npm run lint
npm run formato:verificar
npm run pruebas:cobertura
npm run verificar:cobertura
npm run build
```

## Coverage gate

Se implementa un umbral mínimo (80% líneas) con `scripts/check-coverage.js`.
Esto evita que la calidad disminuya silenciosamente.

## Relación entre CI y seguridad

El pipeline de **Integración Continua (CI)** cumple un rol central en la verificación automática de la calidad del código.

Dentro de este proyecto CI valida principalmente:

- lint del código
- formato consistente
- ejecución de pruebas automatizadas
- medición de cobertura
- build reproducible

Además del control de calidad, el repositorio incorpora **controles de seguridad complementarios** mediante workflows especializados:

- **CodeQL** para análisis estático de seguridad (SAST)
- **Dependency Review** para analizar cambios de dependencias en Pull Requests
- **Dependabot** para mantener dependencias actualizadas

Estos controles permiten detectar problemas de seguridad **antes de que el código sea integrado o desplegado**.

Para comprender mejor cómo funcionan estas herramientas se incluye un **laboratorio guiado** disponible en la rama:

`laboratorio-seguridad`

La documentación del laboratorio se encuentra en:

`docs/11_laboratorio_seguridad.md`
