import type { AuthObject } from '@clerk/backend';
import { createError, type H3Event } from 'h3';

import { middlewareRegistrationRequired } from './errors';

export function getAuth(event: H3Event): AuthObject {
  if (!event.context.auth) {
    throw createError(middlewareRegistrationRequired)
  }

  return event.context.auth
}
