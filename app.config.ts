import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: true,
  server: {
    static: true,
    prerender: {
      routes: ["/404.html", "/ja/404.html", "/es/404.html", "/"],
      crawlLinks: true,
    },
    cloudflare: {
      wrangler: { name: "homepage" },
    },
  },
});
