import ClerkJS from '@clerk/clerk-js'

export default defineNuxtPlugin(async (nuxtApp) => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string
  const Clerk = new ClerkJS(publishableKey);
  const user = useUser()

  async function startClerk() {
    try {
      await Clerk?.load();

      Clerk?.addListener((payload) => {
        if (payload.user === undefined) {
          user.value = { isLoaded: false, isSignedIn: undefined, user: undefined }
          return
        }

        if (payload.user === null) {
          user.value = { isLoaded: true, isSignedIn: false, user: null }
          return
        }

        user.value = { isLoaded: true, isSignedIn: true, user: payload.user }
      })
    } catch (err) {
      console.error('Error starting Clerk: ', err);
    }
  }

  nuxtApp.hooks.hook('app:mounted', startClerk)

  return {
    provide: {
      clerk: Clerk
    }
  }
})
