<script setup lang="ts">
import { useUser } from 'vue-clerk';

const { user } = useUser();
</script>

<template>
  <Card title="User">
    <div v-if="user" class="gap-4">
      <dl>
        <div>
          <dt class="font-semibold">
            User ID
          </dt>
          <dd>{{ user.id }}</dd>
        </div>
        <div v-if="user.firstName" class="mt-2">
          <dt class="font-semibold">
            First name
          </dt>
          <dd>{{ user.firstName }}</dd>
        </div>
        <div v-if="user.lastName" class="mt-2">
          <dt class="font-semibold">
            Last name
          </dt>
          <dd>{{ user.lastName }}</dd>
        </div>
        <div class="mt-2">
          <dt class="font-semibold">
            Email
          </dt>
          <dd>
            <div v-for="email in user.emailAddresses" :key="email.id" class="flex gap-2 mb-1">
              {{ email.emailAddress }}
              <span v-if="user.primaryEmailAddressId === email.id" class="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                Primary
              </span>
            </div>
          </dd>
        </div>
      </dl>
    </div>
    <div v-else>
      Loading user info...
    </div>
  </Card>
</template>
