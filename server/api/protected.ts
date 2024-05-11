import { clerkClient, getAuth } from 'h3-clerk'

export default eventHandler(async (event) => {
  const { userId } = getAuth(event)

  if (!userId) {
    setResponseStatus(event, 403)
    return
  }

  return await clerkClient.users.getUser(userId)
})
