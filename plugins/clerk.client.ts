import { provideClerkToVueApp } from 'vue-clerk-test'
// import { frFR } from '@clerk/localizations'

export default defineNuxtPlugin(async (nuxtApp) => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string

  // Instead of using the `vue-clerk` plugin, we can use this internal function to create a Clerk instance.
  const clerk = provideClerkToVueApp(nuxtApp.vueApp, {
    publishableKey,
    routerPush: (to) => {
      return navigateTo(to)
    },
    routerReplace: (to) => {
      return navigateTo(to, { replace: true })
    },
  })

  // This will make sure that the clerk library is loaded in the client first before moving on to the next middleware.
  await clerk.loadClerkJS()

  return {
    provide: {
      clerk,
    },
  }
})
