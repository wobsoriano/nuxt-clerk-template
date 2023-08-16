<script setup lang="ts">
import { useClerkProvide } from 'vue-clerk';

const { isClerkLoaded, state } = useClerkProvide();
</script>

<template>
  <Card title="Organization">
    <div v-if="!isClerkLoaded">
      Loading organization info...
    </div>
    <div v-else-if="!state.organization?.id">
      You are currently logged in to your personal workspace.
      Create or switch to an organization to see its details.
    </div>
    <div v-else>
      <dl>
        <div class="py-2">
          <dt class="font-semibold">
            Organization ID
          </dt>
          <dd>{{ state.organization.id }}</dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Name
          </dt>
          <dd>{{ state.organization.name }}</dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Members
          </dt>
          <dd>{{ state.organization.membersCount }}</dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Pending Invitations
          </dt>
          <dd>{{ state.organization.pendingInvitationsCount }}</dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Image
          </dt>
          <dd>
            <div class="avatar">
              <div class="w-12 rounded">
                <img :src="state.organization.imageUrl" alt="profile pic">
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </Card>
</template>
