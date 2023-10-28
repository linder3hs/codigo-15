import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/__test__/setup.js",
    globals: true,
  },
});
