<script setup lang="ts">
import { SignUp } from 'vue-clerk';

definePageMeta({
  middleware: ['public'],
});
</script>

<template>
  <div class="grid h-full place-items-center">
    <SignUp sign-in-url="/sign-in" />
  </div>
</template>
