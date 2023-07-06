<script setup lang="ts">
const { $clerk } = useNuxtApp()
const userButton = ref<HTMLDivElement | null>(null)
const user = useUser()

watch(() => user.value.isSignedIn, (value) => {
  if (value) {
    nextTick(() => {
      $clerk.mountUserButton(userButton.value!)
    })
  }
})
</script>

<template>
  <h1>Clerk + Nuxt Example</h1>

  <div v-if="!user.isLoaded">Please wait...</div>

  <div v-else-if="!user.isSignedIn">
    <button @click="$clerk.openSignUp">Sign Up</button>
    <button @click="$clerk.openSignIn">Sign In</button>
  </div>

  <div v-else ref="userButton" style="margin: auto;"></div>
</template>
