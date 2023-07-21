<script setup lang="ts">
const { $clerk } = useNuxtApp();
const userButton = ref<HTMLDivElement | null>(null);
const { user, isLoaded, isSignedIn } = useUser();

watch(user, (value) => {
  if (value) {
    nextTick(() => {
      $clerk.mountUserButton(userButton.value!);
    });
  }
});
</script>

<template>
  <h1>Clerk + Nuxt Example</h1>

  <div v-if="!isLoaded">
    Please wait...
  </div>

  <div v-else-if="!isSignedIn">
    <button @click="$clerk.openSignUp">
      Sign Up
    </button>
    <button @click="$clerk.openSignIn">
      Sign In
    </button>
  </div>

  <div v-else ref="userButton" style="margin: auto;" />
</template>
