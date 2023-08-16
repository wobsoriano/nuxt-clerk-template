<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body">
      <div class="flex flex-row justify-between">
        <h2 class="card-title">
          {{ title }}
        </h2>
        <!-- <div class="join ">
          <input class="join-item btn btn-sm" type="radio" name="options" aria-label="List" />
          <input class="join-item btn btn-sm" type="radio" name="options" aria-label="JSON" />
        </div> -->
      </div>
      <slot />
    </div>
  </div>
</template>
