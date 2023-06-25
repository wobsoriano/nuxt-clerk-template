import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend'

export default eventHandler((event) => {
  const { user } = event.context.auth

  if (!user) {
    throw createError({ statusCode: 401 })
  }

  return user
})

declare module 'h3' {
  interface H3EventContext {
    auth: SignedInAuthObject | SignedOutAuthObject
  }
}
