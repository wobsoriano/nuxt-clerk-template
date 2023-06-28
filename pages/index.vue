<script setup lang="ts">
const { $clerk } = useNuxtApp()
const showAuthLinks = ref(false)
const showUserButton = ref(false)
const userButton = ref<HTMLDivElement | null>(null)

onMounted(() => {
  $clerk?.addListener(({ user }) => {
    if (user) {
      showAuthLinks.value = false
      showUserButton.value = true
      
      nextTick(() => {
        $clerk.mountUserButton(userButton.value!)
      })
    } else {
      showAuthLinks.value = true
      showUserButton.value = false
    }
  })
})
</script>

<template>
  <h1>Clerk + Nuxt Example</h1>

  <div v-if="showAuthLinks" id="auth-links">
    <button @click="$clerk.openSignUp">Sign Up</button>
    <button @click="$clerk.openSignIn">Sign In</button>
  </div>

  <div v-if="showUserButton" ref="userButton" id="user-button"></div>
</template>

<style>
#user-button {
  margin: auto;
}
</style>
