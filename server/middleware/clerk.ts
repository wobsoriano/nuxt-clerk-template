import { withClerkMiddleware } from "@/lib/withClerkMiddleware";

export default withClerkMiddleware({
  publishableKey: useRuntimeConfig().public.clerkPublishableKey,
  secretKey: useRuntimeConfig().clerkSecretKey,
})
