import { clerkPlugin } from 'vue-clerk'
import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend/internal'

export default defineNuxtPlugin((nuxtApp) => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string
  const serverInitialState = useState<SignedInAuthObject | SignedOutAuthObject | undefined>('clerk-initial-state', () => undefined)

  // Installing the `withClerkMiddleware` from `h3-clerk` adds an `auth` object to the context.
  // We can then use the `auth` object to get the initial state of the user.
  if (import.meta.server) {
    const authContext = nuxtApp.ssrContext?.event.context.auth
    serverInitialState.value = authContext ? pruneUnserializableFields(authContext) : undefined
  }

  nuxtApp.vueApp.use(clerkPlugin, {
    publishableKey,
    routerPush: (to: string) => navigateTo(to),
    routerReplace: (to: string) => navigateTo(to, { replace: true }),
    initialState: serverInitialState.value
  })
})

function pruneUnserializableFields(authContext: SignedInAuthObject | SignedOutAuthObject) {
  return JSON.parse(JSON.stringify(authContext))
}
