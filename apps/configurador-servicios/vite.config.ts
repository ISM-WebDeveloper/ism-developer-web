// ==================================================
// IMPORTACIONES
// ==================================================

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// ==================================================
// CONFIGURACIÓN
// ==================================================

export default defineConfig({
  base: "/configurador/",
  plugins: [react()],
  build: {
    outDir: "../../configurador",
    emptyOutDir: true,
    cssMinify: false,
  },
});
