// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts'],
  build: {
    transpile: ['vue-clerk', '@clerk/clerk-js'],
  },
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
  },
  googleFonts: {
    families: {
      Inter: true,
    },
    subsets: 'latin',
  },
})
