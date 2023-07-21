import type { ActiveSessionResource } from '@clerk/types';

type UseSessionReturn =
  | { isLoaded: ComputedRef<false>; isSignedIn: ComputedRef<undefined>; session: Ref<undefined> }
  | { isLoaded: ComputedRef<true>; isSignedIn: ComputedRef<false>; session: Ref<null> }
  | { isLoaded: ComputedRef<true>; isSignedIn: ComputedRef<true>; session: Ref<ActiveSessionResource> };

export function useSession() {
  const session = useState<ActiveSessionResource | null | undefined>('clerk-session', () => undefined);

  const isLoaded = computed(() => {
    if (session.value === undefined)
      return false;

    if (session.value === null)
      return true;

    return true;
  });

  const isSignedIn = computed(() => {
    if (session.value === undefined)
      return undefined;

    if (session.value === null)
      return false;

    return true;
  });

  return {
    session,
    isLoaded,
    isSignedIn,
  } as UseSessionReturn;
}
