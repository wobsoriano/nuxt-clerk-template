import { withClerkMiddleware } from 'h3-clerk'

export default withClerkMiddleware({
  // Setting the option below to `false` will cause infinite reloads in development.
  // Setting it to `true` on the other hand fixes the infinite reloads, but making useFetch and useAsyncData unusable.
  // See https://github.com/wobsoriano/nuxt-clerk-template/issues/6
  adjustProtoHeaderInDev: false,
})
