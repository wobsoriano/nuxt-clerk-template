import { useClerk } from 'vue-clerk';

export default defineNuxtRouteMiddleware(() => {
  const nuxtApp = useNuxtApp();
  const clerk = useClerk();

  // On server, check if the user isn't authenticated
  // and redirect to /sign-in.
  if (
    process.server
    && !nuxtApp.ssrContext?.event.context.auth?.userId
  )
    return navigateTo('/sign-in');

  // On client, check if clerk is loaded and if user isn't authenticated
  // and redirect to /sign-in.
  if (process.client && clerk.loaded && !clerk.user?.id)
    return navigateTo('/sign-in');
});
