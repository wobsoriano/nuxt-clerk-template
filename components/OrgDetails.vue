<script setup lang="ts">
import { useOrganization } from 'vue-clerk'

const jsonOutput = ref(false)

const { isLoaded, organization } = useOrganization()
</script>

<template>
  <div
    class="bg-white shadow overflow-hidden sm:rounded-lg"
    style="box-shadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)';"
  >
    <div class="flex p-8">
      <h3 class="text-xl leading-6 font-semibold text-gray-900 my-auto">
        Organization
      </h3>
      <Toggle
        :checked="jsonOutput"
        :disabled="!(isLoaded && organization)"
        @change="jsonOutput = !jsonOutput"
      />
    </div>
    <div v-if="isLoaded">
      <div v-if="organization">
        <div v-if="jsonOutput" class="overflow-scroll max-h-96 pb-6">
          <JSONOutput :json="organization" />
        </div>
        <div v-else class="pb-6 max-h-96">
          <dl>
            <div class="px-8 py-2">
              <dt class="text-sm font-semibold">
                Organization ID
              </dt>
              <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
                {{ organization.id }}
                <CopyButton :text="organization.id" />
              </dd>
            </div>
            <div class="px-8 py-2">
              <dt class="text-sm font-semibold mb-1">
                Name
              </dt>
              <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                {{ organization.name }}
              </dd>
            </div>
            <div class="px-8 py-2">
              <dt class="text-sm font-semibold mb-1">
                Members
              </dt>
              <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                {{ organization.membersCount }}
              </dd>
            </div>
            <div class="px-8 py-2">
              <dt class="text-sm font-semibold mb-1">
                Pending invitations
              </dt>
              <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                {{ organization.pendingInvitationsCount }}
              </dd>
            </div>
            <div class="px-8 py-2">
              <dt class="text-sm font-semibold mb-1">
                Image
              </dt>
              <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                <NuxtImg
                  class="rounded"
                  :src="organization.imageUrl"
                  :alt="`Logo for ${organization.name}`"
                  width="48"
                  height="48"
                />
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div v-else class="text-gray-700 px-8 pb-5 text-sm">
        You are currently logged in to your personal workspace.
        <br>
        Create or switch to an organization to see its details.
      </div>
    </div>
    <div v-else class="text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      Loading organization data...
    </div>
  </div>
</template>
