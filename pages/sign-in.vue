<script setup lang="ts">
import { SignIn } from 'vue-clerk'

definePageMeta({
  middleware: ['public'],
})
</script>

<template>
  <div class="flex justify-center py-24">
    <ClientOnly>
      <SignIn fallback-redirect-url="/dashboard" />
    </ClientOnly>
  </div>
</template>
