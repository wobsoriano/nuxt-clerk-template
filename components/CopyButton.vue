<script setup lang="ts">
const props = defineProps<{ text: string }>()

const tooltipShown = ref(false)

watchEffect((onInvalidate) => {
  if (tooltipShown.value) {
    const timeout = setTimeout(() => tooltipShown.value = false, 2000)
    onInvalidate(() => clearTimeout(timeout))
  }
})

function onClick() {
  if (navigator.clipboard)
    navigator.clipboard.writeText(props.text)
  tooltipShown.value = true
}
</script>

<template>
  <button @click="onClick">
    <Icon name="CopyIcon" />
  </button>

  <div
    class="absolute z-10 bg-gray-900 text-white rounded p-2 text-xs transition-all ease-in-out translate-x-60 shadow-sm shadow-gray-500" :class="{
      'translate-y-10 opacity-0': !tooltipShown,
      'translate-y-6': tooltipShown,
    }"
  >
    Copied
  </div>
</template>
