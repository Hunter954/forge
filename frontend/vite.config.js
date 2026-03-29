import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: ["nostracode.up.railway.app", ".up.railway.app"],
    proxy: {
      "/api": "http://127.0.0.1:5000",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ["nostracode.up.railway.app", ".up.railway.app"],
  },
  build: {
    outDir: "dist",
  },
});
