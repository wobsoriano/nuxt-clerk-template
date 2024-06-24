// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts'],
  runtimeConfig: {
    public: {
      publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      signInUrl: process.env.CLERK_SIGN_IN_URL,
      signUpUrl: process.env.CLERK_SIGN_UP_URL,
      signInForceRedirectUrl: process.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL,
      signUpForceRedirectUrl: process.env.CLERK_SIGN_UP_FORCE_REDIRECT_URL,
    }
  },
  googleFonts: {
    families: {
      Inter: true,
    },
    subsets: 'latin',
  },
})
