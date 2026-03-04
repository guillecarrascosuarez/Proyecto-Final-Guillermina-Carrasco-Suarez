import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "html"],
      reportsDirectory: "coverage",

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
