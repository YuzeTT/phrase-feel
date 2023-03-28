<script setup lang="ts">
import { sumNumber, theContentDefault } from '~/logic/utils'

const isShow = ref(true)
const isArticle = ref(true)

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
      <h2 text-xl font-serif font-black text-center table mx-auto p-1 :class="isShow ? '' : 'bg-current !op20'">
        「{{ content.story[content.startID].text }}」
      </h2>
      <div flex flex-wrap gap-1 justify-center mt-3 op50 :class="isShow ? '' : 'bg-current !op20'">
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
    <div h-1px w-10 border="b base" my-4 mx-auto />
    <div space-y-2>
      <h2 text-xl font-serif font-black op50>
        选择
      </h2>
      <button v-for="(item, i) in content.story[content.startID].select" :key="i" w-full text-left py-1 flex items-center gap-1 class="group" @click="content.startID = item.jump">
        <div i-ri-arrow-right-s-fill op-30 group-hover:op-100 /> {{ item.text }}
      </button>
    </div>
    <div v-if="!isArticle" space-y-2>
      <div h-1px w-10 border="b base" my-4 mx-auto />
      <h2 text-xl font-serif font-black op50>
        原文
      </h2>
      <div>
        <p v-for="(item, i) in content.content" :key="i" indent-8>
          {{ item }}
        </p>
      </div>
    </div>
    <!-- <div h-1px w-10 border="b base" my-4 mx-auto /> -->
    <div mt-5 flex gap-2 justify-center>
      <!-- <button border="~ base" px-2 py-1 rounded-md flex gap-1 items-center @click="isArticle = true">
        <div i-ri-article-line />
        查询全文
      </button> -->
      <button border="~ base" px-2 py-1 rounded-md flex gap-1 items-center :class="isArticle ? '' : 'text-indigo'" @click="isArticle = !isArticle">
        <div :class="isArticle ? 'i-ri-article-line' : 'i-ri-close-line'" />
        {{ isArticle ? '查看全文' : '隐藏原文' }}
      </button>
      <button border="~ base" px-2 py-1 rounded-md flex gap-1 items-center :class="isShow ? '' : 'text-indigo'" @click="isShow = !isShow">
        <div :class="isShow ? 'i-ri-eye-line' : 'i-ri-eye-off-line'" />
        {{ isShow ? '开始遮罩' : '关闭遮罩' }}
      </button>
    </div>
    <!-- <div v-if="isArticle" fixed bottom-0 left-0 right-0 top-0 z-100>
      <div bg-zinc-800 left-0 right-0 top-0 bottom-0 absolute transition-opacity duration-500 ease-out opacity-50 class="-z-1" />
      <div bg-white pb-1>
        <h2 font-serif text-center py-3 font-black text-xl>
          原文
        </h2>
        <div p-6 py-4>
          <div text-center>
            <h1 font-serif text-2xl font-black>
              {{ content.name }}
            </h1>
            <p op50 mt-1 text-sm>
              {{ content.author }} · {{ sumNumber(content.content) }} 字 · {{ content.uploader }} 上传
            </p>
          </div>
          <div h-1px w-10 border="b base" my-4 mx-auto />
          <p v-for="(item, i) in content.content" :key="i" indent-8>
            {{ item }}
          </p>
        </div>

        <div flex gap-2 justify-center m-5>
          <button border="~ base" px-2 py-1 rounded-md flex gap-1 items-center @click="isArticle = false">
            <div i-ri-close-line />
            关闭
          </button>
        </div>
      </div>
    </div> -->
    <!-- <div fixed="" z-40="" class="bottom-0 left-0 right-0 top-0">
      <div class="bg-base left-0 right-0 top-0 bottom-0 absolute transition-opacity duration-500 ease-out opacity-50" />
      <div class="bg-base border-base absolute transition-all duration-200 ease-out max-w-screen max-h-screen overflow-auto scrolls top-0 left-0 right-0 border-b" style="">
        <div flex="~ col" p6="" items-center="" relative="">
          <div absolute="" top-4="" right-4="" flex="~">
            <button icon-btn="">
              <div i-carbon-close="" />
            </button>
          </div><p text-xl="" font-serif="" mb4="">
            <b>分享</b>
          </p><div>选择分享方式</div><div grid="~ cols-2 gap-2" my4="">
            <button flex="~ col center" border="~ base" p4="" op80="" class="hover:op100 hover:bg-gray:5" w-30="" h-30="">
              <div i-ep-tickets="" text-10="" op70="" mb1="" /><div>文本分享</div>
            </button><button flex="~ col center" border="~ base" p4="" op80="" class="hover:op100 hover:bg-gray:5" w-30="" h-30="">
              <div i-ep-picture="" text-10="" op70="" mb1="" /><div>保存为图片</div>
            </button>
          </div>
        </div>
      </div>
    </div> -->
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
