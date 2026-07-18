import { execFileSync } from "node:child_process";
import { fileURLToPath, URL } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

const serversUpdate = execFileSync("git", ["log", "-1", "--format=%cI", "src/servers"], { encoding: "utf8" }).trim();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  define: {
    "import.meta.env.VITE_SERVERS_UPDATE": JSON.stringify(serversUpdate)
  }
});
