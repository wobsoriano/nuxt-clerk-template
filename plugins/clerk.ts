import { clerkPlugin } from 'vue-clerk'
// import { frFR } from '@clerk/localizations'

export default defineNuxtPlugin({
  name: 'clerk',
  enforce: 'pre',
  async setup(nuxtApp) {
    const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string

    nuxtApp.vueApp.use(clerkPlugin, {
      publishableKey,
      routerPush: (to: string) => navigateTo(to),
      routerReplace: (to: string) => navigateTo(to, { replace: true }),
      // locale: frFR,
    })
  },
})
