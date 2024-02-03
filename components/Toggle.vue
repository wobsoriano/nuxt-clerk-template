<script setup lang="ts">
defineProps<{
  checked: boolean
  disabled: boolean
}>()

defineEmits(['change'])
</script>

<template>
  <div className="flex items-center justify-end flex-1">
    <button
      :disabled="disabled"
      class="rounded-l-lg py-2 px-4 border-solid border border-gray-300 transition text-sm font-semibold" :class="{
        'bg-gray-100': !checked,
        'bg-gray-50 text-gray-500 cursor-not-allowed': disabled,
      }"
      @click="$emit('change')"
    >
      List
    </button>
    <button
      :disabled="disabled"
      class="rounded-r-lg py-2 px-4 border-solid border border-gray-300 -ml-[1px] transition text-sm font-semibold" :class="{
        'bg-gray-100': checked,
        'bg-gray-50 text-gray-500 cursor-not-allowed': disabled,
      }"
      @click="$emit('change')"
    >
      JSON
    </button>
  </div>
</template>
