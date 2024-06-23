import { useAuth } from 'vue-clerk'

/**
 * A middleware that checks if the user is signed in
 * and redirects to the sign-in page if they are not.
 */
export default defineNuxtRouteMiddleware(() => {
  const { isSignedIn } = useAuth()

  if (!isSignedIn.value)
    return navigateTo('/sign-in')
})
