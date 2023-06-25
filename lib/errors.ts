// https://github.com/clerkinc/javascript/blob/main/packages/remix/src/errors.ts#L1-L0
const createErrorMessage = (msg: string) => {
  return `🔒 Clerk: ${msg.trim()}

For more info, check out the docs: https://clerk.com/docs,
or come say hi in our discord server: https://clerk.com/discord
`;
};

export const middlewareRegistrationRequired =
  createErrorMessage(`The "withAuthMiddleware" should be added to src/middleware/clerk.ts before using the "getAuth".
Example:

import { withClerkMiddleware } from 'h3-clerk';

export default withClerkMiddleware({});
`);
