<script setup lang="ts">
const { data: user } = await useFetch('/api/protected', {
  headers: useRequestHeaders(),
})

if (!user.value)
  navigateTo('/sign-in')
</script>

<template>
  <div class="px-8 py-12 sm:py-16 md:px-20">
    <template v-if="user">
      <h1 class="text-3xl font-semibold text-black">
        👋 Hi, {{ user.firstName || `Stranger` }}
      </h1>
      <div class="grid gap-4 mt-8 lg:grid-cols-3">
        <ClientOnly>
          <UserDetails />
          <SessionDetails />
          <OrgDetails />

          <template #fallback>
            <p>Loading Clerk components...</p>
          </template>
        </ClientOnly>
      </div>
      <h2 class="mt-16 mb-4 text-3xl font-semibold text-black">
        What's next?
      </h2>
      Read the
      <NuxtLink
        class="font-medium text-primary-600 hover:underline"
        href="https://vue-clerk.vercel.app"
        target="_blank"
      >
        Vue Clerk Docs -&gt;
      </NuxtLink>
    </template>
  </div>
</template>
