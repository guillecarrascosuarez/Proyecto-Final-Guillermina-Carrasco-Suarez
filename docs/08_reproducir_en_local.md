# Reproducir el trabajo localmente (paso a paso)

## 1) Instalar Node.js
Recomendación: Node 22 (LTS) o superior.
- En Windows/macOS: usar instalador oficial o `nvm`/`fnm`
- En Linux: recomendado `nvm`

## 2) Clonar el repo
```bash
git clone <URL_DEL_REPO>
cd cicd-github-actions-excellence-demo
```

## 3) Instalar dependencias
```bash
npm install
```


## 4) Correr en dev
```bash
npm run dev
```

## 5) Ejecutar calidad y tests
```bash
npm run lint
npm run formato:verificar
npm run pruebas:cobertura
npm run verificar:cobertura
```

## 6) Build y preview
```bash
npm run build
npm run preview
```

## 7) (Opcional) Docker
```bash
docker compose up --build
```
Abrir `http://localhost:8080`.
