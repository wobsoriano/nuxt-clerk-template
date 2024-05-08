<script setup lang="ts">
import { OrganizationSwitcher, SignedIn, UserButton } from 'vue-clerk'

useHead({
  bodyAttrs: {
    class: 'min-h-screen flex flex-col',
    style: 'font-family: Inter;',
  },
  title: 'Nuxt.js Clerk Template',
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js',
      defer: true,
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js',
      defer: true,
    },
  ],
})
</script>

<template>
  <header class="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
    <NuxtLink href="/" class="flex items-center h-20 gap-2 sm:gap-4">
      <NuxtImg
        src="/clerk.svg"
        alt="Clerk Logo"
        width="102"
        height="32"
        priority
      />
      <Icon name="Times" />
      <NuxtImg
        src="/nuxt.svg"
        alt="Nuxt.js Logo"
        width="102"
        height="21"
        priority
      />
    </NuxtLink>
    <div class="grow" />
    <ClientOnly>
      <SignedIn>
        <div class="hidden sm:block">
          <OrganizationSwitcher after-create-organization-url="/dashboard" />
        </div>
        <div class="block sm:hidden">
          <OrganizationSwitcher
            after-create-organization-url="/dashboard"
            :appearance="{
              elements: {
                organizationSwitcherTriggerIcon: `hidden`,
                organizationPreviewTextContainer: `hidden`,
                organizationSwitcherTrigger: `pr-0`,
              },
            }"
          />
        </div>
        <UserButton after-sign-out-url="/" />
      </SignedIn>

      <template #fallback>
        <p>Loading Clerk components...</p>
      </template>
    </ClientOnly>
  </header>
  <main class="grow">
    <NuxtPage />
  </main>
  <footer class="flex items-center h-20 gap-1 px-8 font-medium border-t md:px-20">
    <!-- <Image
        src="/clerk.svg"
        alt="Clerk Logo"
        width={64}
        height={32}
        priority
      /> -->
    <span class="text-sm">© 2023</span>
    <nav class="flex justify-end grow sm:gap-2">
      <a
        class="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
        href="https://vue-clerk.vercel.app"
      >
        <div class="m-auto">
          <Icon name="Docs" />
        </div>
        <span class="hidden sm:inline"> Visit Vue Clerk Docs</span>
        <span class="inline sm:hidden"> Docs</span>
      </a>
      <a
        class="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
        href="https://github.com/wobsoriano/nuxt-clerk-template"
      >
        <div class="m-auto">
          <Icon name="GitHub" />
        </div>
        <span class="hidden sm:inline"> View on Github</span>
      </a>
    </nav>
  </footer>
</template>
