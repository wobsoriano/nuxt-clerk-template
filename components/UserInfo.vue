<script setup lang="ts">
import { useUser } from 'vue-clerk';

const { user } = useUser();
</script>

<template>
  <Card title="User">
    <div v-if="user">
      <dl>
        <div class="py-2">
          <dt class="font-semibold">
            User ID
          </dt>
          <dd>{{ user.id }}</dd>
        </div>
        <div v-if="user.firstName" class="py-2">
          <dt class="font-semibold">
            First name
          </dt>
          <dd>{{ user.firstName }}</dd>
        </div>
        <div v-if="user.lastName" class="py-2">
          <dt class="font-semibold">
            Last name
          </dt>
          <dd>{{ user.lastName }}</dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Email
          </dt>
          <dd>
            <div v-for="email in user.emailAddresses" :key="email.id" class="flex gap-2 mb-1">
              {{ email.emailAddress }}
              <span v-if="user.primaryEmailAddressId === email.id" class="text-xs bg-primary text-primary-700 text-white rounded-2xl px-2 font-medium pt-[3px]">
                Primary
              </span>
            </div>
          </dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Profile Image
          </dt>
          <dd>
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img :src="user.imageUrl" alt="profile pic">
              </div>
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
