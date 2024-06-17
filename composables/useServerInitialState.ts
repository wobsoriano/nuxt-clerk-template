import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/backend/internal'

export const useServerInitialState = () => useState<SignedInAuthObject | SignedOutAuthObject | undefined>('clerk-initial-state', () => undefined)
