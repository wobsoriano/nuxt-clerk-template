import ClerkJS from '@clerk/clerk-js'

export default defineNuxtPlugin(async () => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string

  async function startClerk() {
    const Clerk = new ClerkJS(publishableKey);
  
    try {
      await Clerk?.load();

      console.log('clerk loaded')

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
})
