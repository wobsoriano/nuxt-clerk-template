export default defineNuxtRouteMiddleware((to) => {
  const { userId } = useAuth()
  const isProtectedPage = ['/dashboard'].includes(to.path)
  const isGuestPage = ['/sign-in', '/sign-up'].includes(to.path)

  if (userId.value && isGuestPage) {
    return navigateTo('/dashboard')
  }

  if (!userId.value && isProtectedPage) {
    return navigateTo('/sign-in')
  }
})
