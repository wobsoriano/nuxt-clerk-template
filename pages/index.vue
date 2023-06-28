<script setup lang="ts">
const { $clerk } = useNuxtApp()
const showAuthLinks = ref(true)
const userButton = ref<HTMLDivElement | null>(null)
const user = useUser()

watch(user, (value) => {
  if (value) {
    showAuthLinks.value = false

    nextTick(() => {
      $clerk.mountUserButton(userButton.value!)
    })
  } else {
    showAuthLinks.value = true
  }
})
</script>

<template>
  <h1>Clerk + Nuxt Example</h1>

  <div v-if="showAuthLinks">
    <button @click="$clerk.openSignUp">Sign Up</button>
    <button @click="$clerk.openSignIn">Sign In</button>
  </div>

  <div v-else ref="userButton" style="margin: auto;"></div>
</template>
