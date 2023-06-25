// import { ClerkH3WithAuth } from "@/lib/connect";

// export default ClerkH3WithAuth((event) => {
//   return {
//     auth: event.context.auth
//   }
// }, {
//   publishableKey: useRuntimeConfig().clerk.publishableKey,
//   secretKey: useRuntimeConfig().clerk.secretKey,
// })

export default eventHandler((event) => {
  return event.context.auth
})
