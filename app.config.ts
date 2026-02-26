import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      imagetools({
        defaultDirectives: (id) => {
          if (id.searchParams.has("gallery")) {
            return new URLSearchParams("w=128;256;346&format=avif;webp;png&as=picture");
          }
          return new URLSearchParams();
        },
        cache: {
          enabled: true,
          dir: "./node_modules/.cache/imagetools",
        },
      }),
    ],
  },
  ssr: true,
  server: {
    // static: true,
    prerender: {
      routes: [
        "/404.html",
        "/ja/404.html",
        "/es/404.html",
        "/enchcracker/",
        "/richtext-js/",
        "/",
      ],
      crawlLinks: true,
    },
    cloudflare: {
      wrangler: { name: "homepage" },
    },
  },
});
