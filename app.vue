<script setup lang="ts">
import { OrganizationSwitcher, UserButton } from 'vue-clerk';
</script>

<template>
  <div data-theme="light" class="flex flex-col h-screen">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
          Nuxt Clerk
        </NuxtLink>
      </div>
      <div class="flex-none gap-4">
        <OrganizationSwitcher />
        <UserButton after-sign-out-url="http://localhost:3000/sign-in" />
      </div>
    </div>
    <div class="grow">
      <div class="px-8 py-12 sm:py-16 md:px-20">
        <NuxtPage />
      </div>
    </div>
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  </div>
</template>
