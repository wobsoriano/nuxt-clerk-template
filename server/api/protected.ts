import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend'

export default eventHandler((event) => {
  const { userId } = event.context.auth

  if (!userId) {
    setResponseStatus(event, 401)
    return 'You are not authorized to view this page.'
  }

  return event.context.auth
})

declare module 'h3' {
  interface H3EventContext {
    auth: SignedInAuthObject | SignedOutAuthObject
  }
}
