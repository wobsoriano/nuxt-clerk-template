<script setup lang="ts">
import { useAuth } from 'vue-clerk';

const { isSignedIn } = useAuth();

const getStartedLink = computed(() => {
  if (isSignedIn.value)
    return '/profile';

  return '/sign-in';
});
</script>

<template>
  <div class="hero h-full">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Auth starts here.
        </h1>
        <p class="py-6">
          A simple and powerful Nuxt template featuring authentication and user management powered by Clerk.
        </p>
        <NuxtLink :to="getStartedLink" class="btn btn-primary">
          Get Started
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
