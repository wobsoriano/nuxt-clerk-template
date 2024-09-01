import { clerkClient, getAuth } from '#clerk'

export default eventHandler(async (event) => {
  const { userId } = getAuth(event)

  if (!userId) {
    setResponseStatus(event, 403)
    return
  }

  return await clerkClient(event).users.getUser(userId)
})
