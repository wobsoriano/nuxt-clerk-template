import type { UserResource } from '@clerk/types'

export default function useUser() {
  return useState<UserResource | null | undefined>(() => null)
}
