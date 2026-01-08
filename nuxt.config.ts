import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  ssr: false,

  nitro: {
    preset: "netlify",
  },

  routeRules: {
    "/**": { prerender: true },
    "/blog/**": { ssr: true },
    "/success": { prerender: true },
  },

  app: {
    baseURL: "/",
    buildAssetsDir: "assets",

    head: {
      htmlAttrs: {
        lang: "ja",
      },

      title:
        "(株)田中電気システムサービス|太陽光発電と需要設備の点検・メンテナンス",

      meta: [
        // Basic
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "石川県白山市の株式会社田中電気システムサービスは、太陽光発電と需要設備のシステム点検・メンテナンス・施工まで一貫して頼める技術会社です。",
        },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ja_JP" },
        {
          property: "og:title",
          content:
            "(株)田中電気システムサービス|太陽光発電と需要設備の点検・メンテナンス",
        },
        {
          property: "og:description",
          content:
            "石川県白山市の株式会社田中電気システムサービスは、太陽光発電と需要設備のシステム点検・メンテナンス・施工まで一貫して頼める技術会社です。",
        },
        {
          property: "og:site_name",
          content: "株式会社田中電気システムサービス",
        },
        {
          property: "og:url",
          content: "https://tanaka-denki.netlify.app/",
        },
        {
          property: "og:image",
          content: "https://i.imgur.com/3SpljoQ.png",
        },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "(株)田中電気システムサービス|太陽光発電と需要設備の点検・メンテナンス",
        },
        {
          name: "twitter:description",
          content:
            "石川県白山市の株式会社田中電気システムサービスは、太陽光発電と需要設備のシステム点検・メンテナンス・施工まで一貫して頼める技術会社です。",
        },
        {
          name: "twitter:image",
          content: "https://i.imgur.com/3SpljoQ.png",
        },
      ],

      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap",
        },
      ],
    },
  },

  modules: ["@nuxt/icon", "@nuxt/scripts"],

  scripts: {
    registry: {
      googleAnalytics: {
        id: "G-R26X812NKP",
      },
    },
  },

  icon: {
    mode: "css",
    cssLayer: "base",
  },

  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/app/components", pathPrefix: false },
  ],

  runtimeConfig: {
    public: {
      adminEmail: process.env.NUXT_PUBLIC_ADMIN_EMAIL,
      adminPassword: process.env.NUXT_PUBLIC_ADMIN_PASSWORD,
      contentfulSpace: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE,
      contentfulToken: process.env.NUXT_PUBLIC_CONTENTFUL_TOKEN,
    },
  },
});
