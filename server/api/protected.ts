import { clerkClient, withClerkAuth } from 'h3-clerk';

// This causes an infinite loop on first visit in development.
export default withClerkAuth(async (event) => {
  const { auth } = event.context;

  if (!auth.userId) {
    setResponseStatus(event, 403);
    return '';
  }

  return await clerkClient.users.getUser(auth.userId);
}, {
  publishableKey: useRuntimeConfig().public.clerkPublishableKey,
  secretKey: useRuntimeConfig().clerkSecretKey,
});
