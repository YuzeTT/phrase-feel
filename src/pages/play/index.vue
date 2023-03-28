<script setup lang="ts">
import { sumNumber, theContentDefault } from '~/logic/utils'

const content = useStorage('content', theContentDefault, localStorage)
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
      <p op50 mt-1 text-sm>
        {{ content.author }} · {{ sumNumber(content.content) }} 字 · {{ content.uploader }} 上传
      </p>
    </div>
    <div h-1px w-10 border="b base" my-4 mx-auto />
    <div mt-5>
      <h2 text-xl font-serif font-black text-center>
        「{{ content.story[content.startID].text }}」
      </h2>
      <div flex flex-wrap gap-1 justify-center mt-3 op50>
        <p v-for="(item, i) in content.story[content.startID].note" :key="i" text-sm font-serif text-center>
          {{ item }}
        </p>
      </div>
      <div h-1px w-10 border="b base" my-4 mx-auto />
      <h2 text-xl font-serif font-black op50>
        剧情
      </h2>
      <p indent-8 mt-2>
        {{ content.story[content.startID].plot }}
      </p>
    </div>
    <div space-y-2 mt-10>
      <h2 text-xl font-serif font-black op50>
        选择
      </h2>
      <button v-for="(item, i) in content.story[content.startID].select" :key="i" w-full text-left py-1 flex items-center gap-1 class="group" @click="content.startID = item.jump">
        <div i-ri-arrow-right-s-fill op-30 group-hover:op-100 /> {{ item.text }}
      </button>
    </div>
    <!-- <div space-y-2 mt-10 border-2 p-2>
      <h2 text-xl font-serif font-black bg-zinc-900 table absolute class="-m-t-6 mx-2 px-1">
        选择
      </h2>
      <button v-for="(item, i) in content.story[content.startID].select" :key="i" w-full text-left py-1 flex items-center gap-1 class="group">
        <div i-ri-arrow-right-s-fill op-30 group-hover:op-100 /> {{ item.text }}
      </button>
    </div> -->
  </div>
</template>
