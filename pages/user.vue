<script setup lang="ts">
definePageMeta({ middleware: 'auth', auth: { guestRedirectUrl: '/sign-in' } })
</script>

<template>
  <div class="flex justify-center py-24">
    <UserProfile />
  </div>
</template>
