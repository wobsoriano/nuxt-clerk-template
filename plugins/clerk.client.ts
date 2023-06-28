import ClerkJS from '@clerk/clerk-js'

export default defineNuxtPlugin(async () => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string
  const Clerk = new ClerkJS(publishableKey);

  async function startClerk() {
    try {
      await Clerk?.load();

      const userButton = document.getElementById('user-button') as HTMLDivElement;
      const authLinks = document.getElementById('auth-links') as HTMLDivElement;

      Clerk?.addListener(({ user }) => {
        // Display links conditionally based on user state
        authLinks.style.display = user ? 'none' : 'block';
      })

      if (Clerk.user) {
        // Mount user button component
        Clerk.mountUserButton(userButton)
        userButton.style.margin = 'auto';
      }
    
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
