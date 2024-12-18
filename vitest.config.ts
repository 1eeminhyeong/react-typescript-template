import packageJson from "./package.json"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    name: packageJson.name,
    dir: "./src",
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
})
