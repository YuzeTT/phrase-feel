<script setup lang="ts">
const { modelValue } = defineModel<{
  modelValue: string
}>()
</script>

<template>
  <div border="~ rounded gray-200 dark:gray-700" p-1 flex gap-2>
    <input
      id="input"
      v-model="modelValue"
      flex-1
      type="text"
      v-bind="$attrs"
      bg="transparent"
      outline="none active:none"
      px-2
    >
    <slot />
  </div>
</template>
