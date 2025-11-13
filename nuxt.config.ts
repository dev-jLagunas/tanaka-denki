// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: false,
  app: {
    baseURL: "/tanaka-denki/",
    buildAssetsDir: "assets",
  },
  modules: ["@nuxt/icon", "@nuxtjs/google-fonts"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  googleFonts: {
    families: {
      "Noto Sans JP": true,
      "Shippori Mincho": true,
    },
    display: "swap",
    preconnect: true,
  },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/app/components", pathPrefix: false },
  ],
});
