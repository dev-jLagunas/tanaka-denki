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
    baseURL: "/",
    buildAssetsDir: "assets",
    head: {
      title: "田中電気サービス | 太陽光発電の点検・メンテナンス",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        // Basic
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "石川県白山市の田中電気サービスは、太陽光発電システムの点検・メンテナンス・修理を専門とする技術会社です。",
        },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ja_JP" },
        {
          property: "og:title",
          content: "田中電気サービス | 太陽光発電の点検・メンテナンス",
        },
        {
          property: "og:description",
          content:
            "石川県白山市の太陽光発電メンテナンス会社。点検・赤外線診断・定期点検でお客様の発電所を守ります。",
        },
        {
          property: "og:url",
          content: "https://tanaka-denki.netlify.app/",
        },
        {
          property: "og:site_name",
          content: "田中電気サービス",
        },
        {
          property: "og:image",
          content: "https://tanaka-denki.netlify.app/og/tdss-og.jpg",
        },

        // Twitter (optional)
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "田中電気サービス | 太陽光発電の点検・メンテナンス",
        },
        {
          name: "twitter:description",
          content:
            "石川県白山市の太陽光発電メンテナンス会社。ドローン点検・赤外線診断・定期点検でお客様の発電所を守ります。",
        },
        {
          name: "twitter:image",
          content: "https://tanaka-denki.netlify.app/og/tdss-og.jpg",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
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
