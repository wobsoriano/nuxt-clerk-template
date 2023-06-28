import ClerkJS from '@clerk/clerk-js'

export default defineNuxtPlugin(async () => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string
  const Clerk = new ClerkJS(publishableKey);

  async function startClerk() {
    try {
      await Clerk?.load();
    } catch (err) {
      console.error('Error starting Clerk: ', err);
    }
  }
  
  startClerk()

  return {
    provide: {
      clerk: Clerk
    }
  }
})
