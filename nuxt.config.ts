// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts'],

  runtimeConfig: {
    public: {
      publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  },

  googleFonts: {
    families: {
      Inter: true,
    },
    subsets: 'latin',
  },

  compatibilityDate: '2024-07-02',
})
