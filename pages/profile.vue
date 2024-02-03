<script setup lang="ts">
const { data: user } = await useFetch('/api/protected', {
  headers: useRequestHeaders()
});

if (!user.value) {
  navigateTo('/sign-in')
}
</script>

<template>
  <h1 class="text-3xl font-semibold">
    👋 Hi, {{ user?.firstName }}!
  </h1>
  <div class="grid lg:grid-cols-3 gap-4">
    <UserInfo />
    <SessionInfo />
    <OrganizationInfo />
  </div>
</template>
