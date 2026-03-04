import fs from "node:fs";

const summaryPath = "coverage/coverage-summary.json";
const MIN_LINES = 80;

if (!fs.existsSync(summaryPath)) {
  console.error(`No se encontró el resumen de cobertura en ${summaryPath}`);
  process.exit(1);
}

const json = JSON.parse(fs.readFileSync(summaryPath, "utf8"));
const pct = json?.total?.lines?.pct;

if (typeof pct !== "number") {
  console.error("Formato inválido del resumen de cobertura");
  process.exit(1);
}

if (pct < MIN_LINES) {
  console.error(`Cobertura insuficiente: ${pct}% (min ${MIN_LINES}%)`);
  process.exit(1);
}

console.log(`Cobertura OK: ${pct}% (min ${MIN_LINES}%)`);
