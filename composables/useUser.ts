import type { UserResource } from '@clerk/types'

export function useUser() {
  return useState<UserResource | null | undefined>(() => null)
}
