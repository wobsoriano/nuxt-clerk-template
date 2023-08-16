<script setup lang="ts">
import { SignIn } from 'vue-clerk';

const route = useRoute();
</script>

<template>
  <div class="grid h-full place-items-center">
    <SignIn :path="route.path" redirect-url="http://localhost:3000/profile" />
  </div>
</template>
