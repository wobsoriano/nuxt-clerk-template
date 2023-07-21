import type { UserResource } from '@clerk/types';

type UseUserReturn =
  | { isLoaded: ComputedRef<false>; isSignedIn: ComputedRef<undefined>; user: Ref<undefined> }
  | { isLoaded: ComputedRef<true>; isSignedIn: ComputedRef<false>; user: Ref<null> }
  | { isLoaded: ComputedRef<true>; isSignedIn: ComputedRef<true>; user: Ref<UserResource> };

export function useUser() {
  const user = useState<UserResource | null | undefined>('clerk-user', () => undefined);

  const isLoaded = computed(() => {
    if (user.value === undefined)
      return false;

    if (user.value === null)
      return true;

    return true;
  });

  const isSignedIn = computed(() => {
    if (user.value === undefined)
      return undefined;

    if (user.value === null)
      return false;

    return true;
  });

  return {
    user,
    isLoaded,
    isSignedIn,
  } as UseUserReturn;
}
