import { Clerk, provideClerkToApp } from 'vue-clerk/plugin'

export default defineNuxtPlugin(async (nuxtApp) => {
  const isClerkLoaded = ref(false)
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string

  const clerk = new Clerk(publishableKey)

  // Instead of using the `vue-clerk` plugin, we can use this internal function to create a Clerk instance.
  provideClerkToApp(nuxtApp.vueApp, clerk, {
    isClerkLoaded,
    shouldLoadClerk: false,
    clerkOptions: {}, // Optional since we run `clerk.load` manually
  })

  // This will make sure that the clerk library is loaded in the client first before moving on to the next middleware.
  await clerk.load({
    routerPush: (to) => {
      return navigateTo(to)
    },
    routerReplace: (to) => {
      return navigateTo(to, { replace: true })
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
