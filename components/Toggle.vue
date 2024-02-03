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
        @click="$emit('change')"
        :class="{
          'rounded-l-lg py-2 px-4 border-solid border border-gray-300 transition text-sm font-semibold': true,
          'bg-gray-100': !checked,
          'bg-gray-50 text-gray-500 cursor-not-allowed': disabled,
        }"
      >
        List
      </button>
      <button
        :disabled="disabled"
        @click="$emit('change')"
        :class="{
          'rounded-r-lg py-2 px-4 border-solid border border-gray-300 -ml-[1px] transition text-sm font-semibold': true,
          'bg-gray-100': checked,
          'bg-gray-50 text-gray-500 cursor-not-allowed': disabled,
        }"
      >
        JSON
      </button>
    </div>
</template>
