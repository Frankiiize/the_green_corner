import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(import.meta.dirname, "src"),
  server: {
    open: "/views/index.html",
  },
  build: {
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, "src/views/index.html"),
        nosotros: resolve(import.meta.dirname, "src/views/nosotros.html"),
        productos: resolve(import.meta.dirname, "src/views/productos.html"),
      },
    },
  },
});
