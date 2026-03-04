import { sum } from "./sum";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("Missing #app container");

app.innerHTML = `
  <main style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; max-width: 880px; margin: 40px auto; padding: 0 16px;">
    <h1>CI/CD </h1>
    <p>
      Este sitio se construye con <strong>Vite + TypeScript</strong> y se despliega con <strong>GitHub Actions</strong> a
      <strong>GitHub Pages</strong> automáticamente cuando el CI pasa.
    </p>

    <section style="margin-top: 18px;">
      <h2>Prueba rápida</h2>
      <p>sum(2, 3) = <strong>${sum(2, 3)}</strong></p>
      <ul>
        <li>CI: lint + format + tests + coverage + build</li>
        <li>Seguridad: CodeQL + Dependency Review + Dependabot</li>
        <li>CD: Deploy a Pages post-CI</li>
      </ul>
    </section>

    <section style="margin-top: 18px;">
      <h2>Docs</h2>
      <p>Leé el paso a paso en la carpeta <code>docs/</code>.</p>
    </section>
  </main>
`;
