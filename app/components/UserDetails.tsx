const Row = defineComponent((props: { desc: string, value: string }, { slots }) => {
  return () => (
    <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
      <span class="text-xs font-semibold block flex-shrink-0">{props.desc}</span>
      <span class="text-xs text-[#7D7D7E] font-mono block relative">
        <span class="block truncate w-full">{props.value}</span>
        {slots.default?.()}
      </span>
    </div>
  )
}, {
  props: ['desc', 'value'],
})

const PointerC = defineComponent((props: { label: string }) => {
  return () => (
    <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
      <div class="relative">
        <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
        <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
      </div>
      <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
        {props.label}
      </div>
    </div>
  )
}, {
  props: ['label'],
})

function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatDateWithNumbers(date: Date): string {
  return date.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}

const UserDetails = defineComponent(() => {
  const { user } = useUser()
  const { session } = useSession()
  const { organization } = useOrganization()

  return () => (
    user.value && session.value
      ? (
          <div class="p-16 rounded-lg border border-[#EDEDED] bg-[#F1F1F2] background relative">
            <div class="p-8 rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 max-w-[25rem]">
              <div class="flex flex-col items-center gap-2 mb-6">
                <div class="w-full relative flex justify-center">
                  <img src={user.value.imageUrl} class="size-20 rounded-full" />
                  <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-x-2.5 -translate-y-1/2 left-full">
                    <div class="relative">
                      <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                      <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
                    </div>
                    <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                      user.imageUrl
                    </div>
                  </div>
                </div>
                {user.value.firstName && user.value.lastName
                  ? (
                      <h1 class="text-[1.0625rem] font-semibold relative w-full text-center">
                        {user.value.firstName}
                        {' '}
                        {user.value.lastName}
                        <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-x-2.5 -translate-y-1/2 left-full">
                          <div class="relative">
                            <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                            <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
                          </div>
                          <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                            user.firstName
                          </div>
                          <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white -translate-x-3">
                            user.lastName
                          </div>
                        </div>
                      </h1>
                    )
                  : (
                      <div class="h-4" />
                    )}
              </div>

              <div class="px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]">
                <Row desc="Email" value={user.value.emailAddresses[0]!.emailAddress}>
                  <PointerC label="user.emailAddresses[0].emailAddress" />
                </Row>
                <Row desc="Last signed in" value={formatDate(user.value.lastSignInAt!)}>
                  <PointerC label="user.lastSignInAt" />
                </Row>
                <Row desc="Joined on" value={formatDate(user.value.createdAt!)}>
                  <PointerC label="user.createdAt" />
                </Row>
                <Row desc="User ID" value={user.value.id}>
                  <PointerC label="user.user.id" />
                </Row>
              </div>
              <h2 class="mt-6 mb-4 text-[0.9375rem] font-semibold">
                Session details
              </h2>
              <div class="px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]">
                <Row desc="Session ID" value={session.value.id}>
                  <PointerC label="session.id" />
                </Row>
                <Row desc="Status" value={session.value.status}>
                  <PointerC label="session.status" />
                </Row>
                <Row
                  desc="Last active"
                  value={formatDateWithNumbers(session.value.lastActiveAt)}
                >
                  <PointerC label="session.lastActiveAt" />
                </Row>
                <Row
                  desc="Session expiration"
                  value={formatDateWithNumbers(session.value.expireAt)}
                >
                  <PointerC label="session.expireAt" />
                </Row>
              </div>
              {organization.value
                ? (
                    <>
                      <h2 class="mt-6 mb-4 text-[0.9375rem] font-semibold">
                        Organization detail
                      </h2>
                      <div class="px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]">
                        <Row desc="Organization ID" value={organization.value.id}>
                          <PointerC label="organization.id" />
                        </Row>
                        <Row desc="Name" value={organization.value.name}>
                          <PointerC label="organization.name" />
                        </Row>
                        <Row desc="Members" value={String(organization.value.membersCount)}>
                          <PointerC label="organization.membersCount" />
                        </Row>
                        <Row
                          desc="Pending invitations"
                          value={String(organization.value.pendingInvitationsCount)}
                        >
                          <PointerC label="organization.pendingInvitationsCount" />
                        </Row>
                      </div>
                    </>
                  )
                : null}
            </div>
          </div>
        )
      : null
  )
})

export default UserDetails
