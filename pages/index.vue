<script setup lang="ts">
import { CARDS } from '~/consts/cards'
</script>

<template>
  <main class="bg-[#FAFAFA] relative">
    <div
      class="w-full bg-white max-w-[75rem] mx-auto flex flex-col border-l border-r border-[#F2F2F2] row-span-3"
    >
      <div
        class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#F2F2F2]"
      />
      <NuxtImg
        alt="Device"
        class="size-64 bg-transparent absolute left-1/2 -translate-x-[23.75rem] -top-6 h-[51.375rem] object-contain w-[39.0625rem]"
        src="/images/logo.png"
      />

      <div class="px-12 py-16 border-b border-[#F2F2F4]">
        <div class="bg-[#F4F4F5] px-4 py-3 rounded-full inline-flex gap-4">
          <ClerkLogo />
          <div aria-hidden class="w-px h-6 bg-[#C7C7C8]" />
          <NuxtLogo />
        </div>
      </div>

      <div class="p-10 border-b border-[#F2F2F2]">
        <h1 class="text-5xl font-bold tracking-tight text-[#131316] relative">
          Auth starts here
        </h1>

        <p
          class="text-[#5E5F6E] pt-3 pb-6 max-w-[30rem] text-[1.0625rem] relative"
        >
          A simple and powerful Nuxt template featuring authentication and user
          management powered by Clerk.
        </p>
        <div class="relative flex gap-3">
          <SignedIn>
            <NuxtLink
              href="/dashboard"
              class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
            >
              Dashboard
            </NuxtLink>
          </SignedIn>
          <SignedOut>
            <SignInButton class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
              Sign In
            </SignInButton>
          </SignedOut>
          <NuxtLink
            href="/#features"
            class="px-4 py-2 rounded-full text-[#131316] text-sm font-semibold bg-[#F7F7F8]"
          >
            Learn more
          </NuxtLink>
        </div>
      </div>
      <div class="flex gap-8 w-full h-[41.25rem] scale-[1.03]">
        <div class="space-y-8 translate-y-12">
          <NuxtImg
            alt="Device"
            src="/images/sign-up@2xrl.webp"
            class="flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5"
          />
        </div>
        <div class="space-y-8 -translate-y-4">
          <NuxtImg
            alt="Device"
            src="/images/verify@2xrl.webp"
            class="flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5"
          />
          <NuxtImg
            alt="Device"
            src="/images/user-button-2@2xrl.webp"
            class="flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5"
          />
        </div>
        <div class="space-y-8 -translate-y-[22.5rem]">
          <NuxtImg
            alt="Device"
            src="/images/sign-in@2xrl.webp"
            class="flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5"
          />
          <NuxtImg
            alt="Device"
            src="/images/user-button@2xrl.webp"
            class="flex-none rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute left-0 right-0 bottom-0 h-[18.75rem] bg-gradient-to-t from-white"
    />
  </main>
  <LearnMore :cards="CARDS" />
  <Footer />
</template>

<style>
  .gradient {
    position: relative;
    background-image: repeating-linear-gradient(
      to right,
      #63dffa,
      #6c47ff,
      #63dffa
    );
    z-index: 1;
    background-position-x: 0%;
    background-size: 200%;
    animation: gradimate 3s linear infinite;
    background-clip: text;
  }

  @keyframes gradimate {
    0% {
      background-position-x: 0%;
    }
    50% {
      background-position-x: 100%;
    }
    100% {
      background-position-x: 200%;
    }
  }
</style>
