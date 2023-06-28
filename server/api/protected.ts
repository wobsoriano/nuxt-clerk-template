import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend'

export default eventHandler((event) => {
  const { auth } = event.context

  if (!auth.userId) {
    setResponseStatus(event, 401)
    return 'You are not authorized to view this page.'
  }

  return { message: `Hi, ${auth.userId}` }
})

declare module 'h3' {
  interface H3EventContext {
    auth: SignedInAuthObject | SignedOutAuthObject
  }
}
