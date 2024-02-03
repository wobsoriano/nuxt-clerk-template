<script setup lang="ts">
defineProps<{
  json: any
}>()
</script>

<template>
  <pre className="px-8 sm:px-6 text-black text-sm">
    <code className="language-json">
      {{ JSON.stringify(json, null, 2) }}
    </code>
  </pre>
</template>
