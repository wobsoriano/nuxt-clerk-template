// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  runtimeConfig: {
    public: {
      publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  },

  compatibilityDate: '2024-07-02',
})
