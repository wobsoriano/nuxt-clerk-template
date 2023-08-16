<script setup lang="ts">
import { useSession } from 'vue-clerk';

const { session } = useSession();
</script>

<template>
  <Card title="Session">
    <div v-if="session">
      <dl>
        <div class="py-2">
          <dt class="font-semibold">
            Session ID
          </dt>
          <dd>{{ session.id }}</dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Status
          </dt>
          <dd>
            <div class="badge">
              {{ session.status }}
            </div>
          </dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Last Active
          </dt>
          <dd>{{ session.lastActiveAt.toLocaleString() }}</dd>
        </div>
        <div class="py-2">
          <dt class="font-semibold">
            Expiry
          </dt>
          <dd>{{ session.expireAt.toLocaleString() }}</dd>
        </div>
      </dl>
    </div>
    <div v-else>
      Loading session info...
    </div>
  </Card>
</template>
