import type { UserResource } from '@clerk/types';

type UseUserReturn =
  | { isLoaded: false; isSignedIn: undefined; user: undefined }
  | { isLoaded: true; isSignedIn: false; user: null }
  | { isLoaded: true; isSignedIn: true; user: UserResource };

export function useUser() {
  return useState<UseUserReturn>('user', () => ({
    isLoaded: false,
    isSignedIn: undefined,
    user: undefined,
  }));
}
