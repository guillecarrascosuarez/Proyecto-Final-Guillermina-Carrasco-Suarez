import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reportsDirectory: "coverage",
      reporter: ["text", "html", "json-summary"],
      exclude: [
        "node_modules/**",
        "dist/**",
        "coverage/**",
        "**/*.d.ts",
        "vite.config.*",
        "vitest.config.*",
        "eslint.config.*",
        "scripts/**",
        "src/main.ts",
      ],
    },
  },
});