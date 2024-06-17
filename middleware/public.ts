import { useAuth } from 'vue-clerk'

export default defineNuxtRouteMiddleware(() => {
  const { isSignedIn } = useAuth()

  if (isSignedIn.value)
    return navigateTo('/dashboard')
})
