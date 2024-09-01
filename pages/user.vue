<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <div class="flex justify-center py-24">
    <UserProfile />
  </div>
</template>
