import { useAuth } from 'vue-clerk'

export default defineNuxtPlugin({
  name: 'auth-check',
  dependsOn: ['clerk'],
  async setup(nuxtApp) {
    const isLoggedIn = useLoggedIn()
    const { isLoaded, isSignedIn } = useAuth()
    const serverInitialState = useServerInitialState()

    if (import.meta.server) {
      isLoggedIn.value = Boolean(nuxtApp.ssrContext?.event.context.auth?.userId)
    }

    watchEffect(() => {
      if (!isLoaded.value) {
        return
      }

      isLoggedIn.value = Boolean(isSignedIn.value)
      if (!isLoggedIn.value) {
        serverInitialState.value = undefined
      }
    })
  },
})
