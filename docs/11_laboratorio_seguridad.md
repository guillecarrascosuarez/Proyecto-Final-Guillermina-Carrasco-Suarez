# Laboratorio de seguridad (anti-patrones + verificación automática)

## Propósito
Este laboratorio permite experimentar de forma segura con controles de seguridad dentro de un pipeline CI/CD.

En lugar de introducir vulnerabilidades reales, se utilizan **anti-patrones** de código comunes que suelen generar riesgos.  
El pipeline los detecta automáticamente y bloquea la integración hasta que se corrijan.

---

## Qué incluye este laboratorio

- Script defensivo: `scripts/verificar_antipatrones.js`
- Integración en CI: el workflow falla si detecta anti-patrones en `src/`
- Ejercicio guiado: introducir un anti-patrón, observar cómo el CI lo detecta, corregir el código y verificar que el pipeline vuelve a pasar correctamente.

---

## Cómo ejecutar el laboratorio

### 1) Cambiar a la rama del laboratorio
```bash
git checkout laboratorio-seguridad