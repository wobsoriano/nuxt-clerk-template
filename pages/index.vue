<script setup lang="ts">
const { $clerk } = useNuxtApp()
</script>

<template>
  <h1>Clerk + Nuxt Example</h1>

  <div id="auth-links">
    <button @click="$clerk.openSignUp()">Sign Up</button>
    <button @click="$clerk.openSignIn()">Sign In</button>
  </div>

  <div id="user-button"></div>
</template>

<style>
#user-button {
  margin: auto;
}

#auth-links {
  display: none;
}

#no-frontend-api-warning h3 {
  color: #e61d1d;
  margin-bottom: 0;
}

#no-frontend-api-warning h4 {
  color: #333;
  font-weight: 400;
  margin-top: 10px;
}
</style>
