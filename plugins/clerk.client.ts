import { Clerk, clerkPlugin, createClerkInstanceWithoutLoading } from 'vue-clerk/plugin'

export default defineNuxtPlugin(async (nuxtApp) => {
  const isClerkLoaded = ref(false)
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string

  const clerk = new Clerk(publishableKey)

  createClerkInstanceWithoutLoading(nuxtApp.vueApp, clerk, isClerkLoaded)

  await clerk.load({
    routerPush: (to) => {
      navigateTo(to)
    },
    routerReplace: (to) => {
      navigateTo(to, { replace: true })
    },
    // appearance: {}
  })

  isClerkLoaded.value = true

  return {
    provide: {
      clerk,
    },
  }
})
