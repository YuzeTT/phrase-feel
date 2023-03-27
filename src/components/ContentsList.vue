<script setup lang="ts">
import type { Content } from '~/logic/types'
import { content, sumNumber } from '~/logic/utils'
const play = (item: Content) => {
  localStorage.setItem('content', JSON.stringify(item))
}
</script>

<template>
  <div space-y-2>
    <!-- {{ modules }} -->
    <div v-for="(item, key) in content" :key="key" bg-coolGray-100 p-3 rounded-lg dark="bg-zinc-800" relative @click="play(item)">
      <h2 font-serif text-2xl font-black>
        {{ item.name }}
      </h2>
      <p op50 mt-1>
        {{ item.author }} · {{ sumNumber(item.content) }} 字 · {{ item.uploader }} 上传
      </p>
      <p v-if="item.warning_text" absolute top-0 right-0 m-2 px-2 py-1 text-red-500 bg-red-100 rounded-md>
        {{ item.warning_text }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
