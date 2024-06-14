export default defineNuxtRouteMiddleware(() => {
  const isLoggedIn = useLoggedIn()

  if (!isLoggedIn.value)
    return navigateTo('/sign-in')
})
