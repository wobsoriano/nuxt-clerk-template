const isProtectedPage = createRouteMatcher(['/dashboard'])
const isGuestPage = createRouteMatcher(['/sign-(in|up)'])

export default defineNuxtRouteMiddleware((to) => {
  const { userId } = useAuth()

  if (userId.value && isGuestPage(to)) {
    return navigateTo('/dashboard')
  }

  if (!userId.value && isProtectedPage(to)) {
    return navigateTo('/sign-in')
  }
})
