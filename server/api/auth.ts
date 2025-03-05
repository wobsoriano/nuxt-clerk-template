import { getAuth } from '@clerk/nuxt/server'

export default defineEventHandler((event) => {
  const { userId } = getAuth(event)

  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  return { userId }
})
