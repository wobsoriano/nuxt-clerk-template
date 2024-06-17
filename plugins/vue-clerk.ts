import { clerkPlugin } from 'vue-clerk'
// import { frFR } from '@clerk/localizations'

export default defineNuxtPlugin((nuxtApp) => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string
  const serverInitialState = useServerInitialState()

  if (import.meta.server) {
    const authContext = nuxtApp.ssrContext?.event.context.auth
    serverInitialState.value = authContext ? JSON.parse(JSON.stringify(authContext)) : null
  }

  nuxtApp.vueApp.use(clerkPlugin, {
    publishableKey,
    routerPush: (to: string) => navigateTo(to),
    routerReplace: (to: string) => navigateTo(to, { replace: true }),
    initialState: serverInitialState.value,
    // locale: frFR,
  })
})
