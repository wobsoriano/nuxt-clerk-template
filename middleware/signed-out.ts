import { useAuth } from 'vue-clerk'

/**
 * A middleware that checks if the user is signed out
 * and redirects to the dashboard page if they are not.
 */
export default defineNuxtRouteMiddleware(() => {
  const { isSignedIn } = useAuth()

  if (isSignedIn.value)
    return navigateTo('/dashboard')
})
