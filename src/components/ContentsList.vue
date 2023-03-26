<script setup lang="ts">
interface Content {
  name: string
}

const modules = import.meta.glob<Content>('../../assets/contents/*.yaml', { import: 'default', eager: true })
</script>

<template>
  <div space-y-2>
    {{ modules }}
    <div v-for="(item, key) in modules" :key="key" bg-coolGray-100 p-3 rounded-md>
      <h2>{{ item.name }}</h2>
    </div>
  </div>
</template>

<style scoped>

</style>
