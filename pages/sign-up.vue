<script setup lang="ts">
import { SignUp } from 'vue-clerk'

definePageMeta({
  middleware: ['signed-out'],
})
</script>

<template>
  <div class="flex justify-center py-24">
    <SignUp fallback-redirect-url="/dashboard" />
  </div>
</template>
