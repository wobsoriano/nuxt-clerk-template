<script setup lang="ts">
import { SignUp } from 'vue-clerk'

definePageMeta({
  middleware: ['public'],
})
</script>

<template>
  <div class="flex justify-center py-24">
    <ClientOnly>
      <SignUp fallback-redirect-url="/dashboard" />
    </ClientOnly>
  </div>
</template>
