# Conceptos base: CI/CD

## CI (Continuous Integration)

Práctica por la cual cada cambio (commit/PR):

- Se integra frecuentemente
- Se valida automáticamente (build, tests, lint)
- Se detectan errores temprano

## CD (Continuous Delivery/Deployment)

Extiende CI para:

- **Delivery**: dejar un release listo para desplegar (puede requerir aprobación)
- **Deployment**: desplegar automáticamente a un entorno (staging/production)

## Por qué GitHub Actions

- Integración nativa con repositorios GitHub
- Workflows versionados como código (`.github/workflows/*.yml`)
- Soporte para matrices, caching, artifacts y environments
