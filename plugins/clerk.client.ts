/**
 * Can't use the @clerk/clerk-js module because of the ff.
 * https://github.com/clerkinc/javascript/issues/1382
 * https://github.com/clerkinc/javascript/issues/1381
 */

export default defineNuxtPlugin(async () => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string

  async function startClerk() {
    const Clerk = window.Clerk;
  
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

  (() => {
    const script = document.createElement("script");
    script.setAttribute("data-clerk-publishable-key", publishableKey);
    script.async = true;
    script.src = `https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`;
    script.crossOrigin = "anonymous";
    script.addEventListener("load", startClerk);
    script.addEventListener("error", () => {
      document.getElementById("no-frontend-api-warning")!.hidden = false;
    });
    document.body.appendChild(script);
  })()
})

declare global {
  interface Window {
    Clerk: import('@clerk/types').Clerk & {
      load: () => void
    }
  }
}
