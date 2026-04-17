import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: "0.0.0.0", // make it accessible over network
    allowedHosts: [
      "https://5aaa-2409-40d7-e9-c6f5-1ccb-55bd-1b0-8cf8.ngrok-free.app", // 👈 your ngrok host
    ],
  },
});
