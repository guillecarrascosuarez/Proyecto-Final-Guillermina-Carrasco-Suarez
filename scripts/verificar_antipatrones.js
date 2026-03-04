import fs from "node:fs";
import path from "node:path";

const DIRECTORIO_A_REVISAR = "src";

const REGLAS = [
  {
    id: "NO_EVAL",
    patron: /eval\s*\(/,
    mensaje: "Se detectó uso de eval(). Evitar ejecución dinámica de código.",
  },
  {
    id: "NO_INNERHTML",
    patron: /\.innerHTML\s*=/,
    mensaje:
      "Se detectó asignación a innerHTML. Puede facilitar XSS si se usa con datos no controlados.",
  },
  {
    id: "NO_DANGEROUSLY_SET",
    patron: /dangerouslySetInnerHTML/,
    mensaje: "Se detectó dangerouslySetInnerHTML. Evitarlo o justificar y sanitizar estrictamente.",
  },
  {
    id: "NO_NEW_FUNCTION",
    patron: /new\s+Function\s*\(/,
    mensaje: "Se detectó new Function(). Evitar construcción dinámica de funciones.",
  },
];

function listarArchivosRecursivo(dir) {
  const resultados = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      resultados.push(...listarArchivosRecursivo(full));
    } else if (item.isFile()) {
      if (/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(item.name)) {
        resultados.push(full);
      }
    }
  }
  return resultados;
}

function main() {
  if (!fs.existsSync(DIRECTORIO_A_REVISAR)) {
    console.log(`No existe "${DIRECTORIO_A_REVISAR}/". No hay nada para revisar.`);
    process.exit(0);
  }

  const archivos = listarArchivosRecursivo(DIRECTORIO_A_REVISAR);
  const hallazgos = [];

  for (const archivo of archivos) {
    const contenido = fs.readFileSync(archivo, "utf8");

    for (const regla of REGLAS) {
      if (regla.patron.test(contenido)) {
        hallazgos.push({
          archivo,
          regla: regla.id,
          mensaje: regla.mensaje,
        });
      }
    }
  }

  if (hallazgos.length > 0) {
    console.error("Verificación de anti-patrones de seguridad: FALLÓ\n");
    for (const h of hallazgos) {
      console.error(`- [${h.regla}] ${h.archivo}`);
      console.error(`  Motivo: ${h.mensaje}\n`);
    }

    console.error(
      "Sugerencia: eliminá el anti-patrón o justificá el caso y aplicá mitigaciones (sanitización/validación).",
    );
    process.exit(1);
  }

  console.log("Verificación de anti-patrones de seguridad: OK");
  process.exit(0);
}

main();
