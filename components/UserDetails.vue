<script setup lang="ts">
import { useUser } from 'vue-clerk'

const { isLoaded, user } = useUser()

const jsonOutput = ref(false)
</script>

<template>
  <div
    class="bg-white shadow overflow-hidden sm:rounded-lg"
    style="box-shadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)';"
  >
    <div class="flex p-8">
      <h3 class="text-xl leading-6 font-semibold text-gray-900 my-auto">
        User
      </h3>
      <Toggle
        :checked="jsonOutput"
        :disabled="!isLoaded"
        @change="jsonOutput = !jsonOutput"
      />
    </div>
    <div v-if="isLoaded && user">
      <div v-if="jsonOutput" class="overflow-scroll max-h-96 pb-6">
        <JSONOutput :json="user" />
      </div>
      <div v-else class="pb-6 max-h-96">
        <dl>
          <div class="px-8 py-2">
            <dt class="text-sm font-semibold">
              User ID
            </dt>
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
              {{ user.id }}
              <CopyButton :text="user.id" />
            </dd>
          </div>
          <div v-if="user.firstName" class="px-8 py-2">
            <dt class="text-sm font-semibold mb-1">
              First Name
            </dt>
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              {{ user.firstName }}
            </dd>
          </div>
          <div v-if="user.lastName" class="px-8 py-2">
            <dt class="text-sm font-semibold mb-1">
              Last Name
            </dt>
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              {{ user.lastName }}
            </dd>
          </div>
          <div class="px-8 py-2">
            <dt class="text-sm font-semibold mb-1">
              Email addresses
            </dt>
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              <div v-for="email in user.emailAddresses" :key="email.id" class="flex gap-2 mb-1">
                {{ email.emailAddress }}
                <span v-if="user.primaryEmailAddressId === email.id" class="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                  Primary
                </span>
              </div>
            </dd>
          </div>
          <div v-if="user.imageUrl" class="px-8 py-2">
            <dt class="text-sm font-semibold mb-1">
              Profile Image
            </dt>
            <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
              <NuxtImg :src="user.imageUrl" class="rounded-full w-12 h-12" />
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div v-else class="text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      Loading user data...
    </div>
  </div>
</template>
