import { type ClerkOptions } from "@clerk/backend";
import { eventHandler, parseCookies, setResponseHeaders, setResponseStatus } from 'h3'
import * as constants from './constants'
import { getSingleValueFromArrayHeader } from "./utils";
import { clerkClient } from "./clerkClient";

export function withClerkMiddleware(options: ClerkOptions) {
  return eventHandler(async (event) => {
    event.context.auth = null

    const cookies = parseCookies(event)
    const secretKey = options.secretKey || constants.SECRET_KEY;
    const publishableKey = options.publishableKey || constants.PUBLISHABLE_KEY;
    const headers = getHeaders(event)

    // get auth state, check if we need to return an interstitial
    const cookieToken = cookies[constants.Cookies.Session]
    const headerToken = headers.authorization?.replace('Bearer ', '');

    const forwardedPort = getSingleValueFromArrayHeader(headers['x-forwarded-port']);
    const forwardedHost = getSingleValueFromArrayHeader(headers['x-forwarded-host']);

    const requestState = await clerkClient.authenticateRequest({
      ...options,
      secretKey,
      publishableKey,
      apiKey: constants.API_KEY,
      frontendApi: constants.FRONTEND_API,
      cookieToken,
      headerToken,
      clientUat: cookies[constants.Cookies.ClientUat],
      origin: headers['origin'],
      host: headers['host'],
      forwardedPort,
      forwardedHost,
      referrer: headers['referer'],
      userAgent: headers['user-agent'],
    });

    // Interstitial cases
    if (requestState.isUnknown) {
      setResponseStatus(event, 401)
      setResponseHeaders(event, {
        [constants.Headers.AuthReason]: requestState.reason,
        [constants.Headers.AuthMessage]: requestState.message,
      })
      return
    }

    if (requestState.isInterstitial) {
      const interstitialHtmlPage = clerkClient.localInterstitial({
        publishableKey,
        frontendApi: constants.FRONTEND_API,
      });

      setResponseStatus(event, 401)
      setResponseHeaders(event, {
        [constants.Headers.AuthReason]: requestState.reason,
        [constants.Headers.AuthMessage]: requestState.message,
      })
      
      return interstitialHtmlPage
    }

    event.context.auth = requestState.toAuth()
  })
}
