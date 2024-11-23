<script setup lang="ts">
import { DASHBOARD_CARDS } from '~/consts/cards'
</script>

<template>
  <main class="max-w-[75rem] w-full mx-auto">
    <div class="grid grid-cols-[1fr_20.5rem] gap-10 pb-10">
      <div>
        <header class="flex items-center justify-between w-full h-16 gap-4">
          <div class="flex gap-4">
            <ClerkLogo />
            <div aria-hidden class="w-px h-6 bg-[#C7C7C8]" />
            <NuxtLogo />
          </div>
          <div class="flex items-center gap-2">
            <OrganizationSwitcher
              :appearance="{
                elements: {
                  organizationPreviewAvatarBox: 'size-6',
                },
              }"
            />
            <UserButton
              :appearance="{
                elements: {
                  userButtonAvatarBox: 'size-6',
                },
              }"
              default-open
            />
          </div>
        </header>
        <UserDetails />
      </div>
      <div class="pt-[3.5rem]">
        <CodeSwitcher />
      </div>
    </div>
  </main>
  <LearnMore :cards="DASHBOARD_CARDS" />
  <Footer />
</template>
