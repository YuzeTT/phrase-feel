<script setup lang="ts">
import type { Content } from '~/logic/types'
import { sumNumber } from '~/logic/utils'

const theDefault: Content = {
  name: '',
  author: '',
  uploader: '',
  warning_text: '',
  content: [],
  story: [],
}
const content = useStorage('content', theDefault, localStorage)
</script>

<template>
  <div v-if="content.name === ''" text-center my-10>
    <h1 font-serif text-2xl font-black>
      无内容可继续
    </h1>
    <button btn mt-5 @click="$router.push('/')">
      返回首页
    </button>
  </div>
  <div v-else>
    <div text-center>
      <h1 font-serif text-2xl font-black>
        {{ content.name }}
      </h1>
      <p op50 mt-1>
        {{ content.author }} · {{ sumNumber(content.content) }} 字 · {{ content.uploader }} 上传
      </p>
    </div>
  </div>
</template>
