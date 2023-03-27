<script setup lang="ts" generic="T extends any, O extends any">
import ContentsList from '~/components/ContentsList.vue'
import { theContentDefault } from '~/logic/utils'

defineOptions({
  name: 'IndexPage',
})

const name = $ref('')

const router = useRouter()

const content = useStorage('content', theContentDefault, localStorage)
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    <div text-center mt-5>
      <div i-ri-ancient-pavilion-fill text-4xl inline-block bg-indigo-500 />
      <p>句情</p>
      <p>
        <em text-sm op75>在剧情中爽背古文</em>
      </p>
    </div>
    <div py-3 />
    <TheInput
      v-model="name"
      placeholder="我相信你不会用搜索框"
      autocomplete="false"

      @keydown.enter="go"
    >
      <button btn>
        搜索
      </button>
    </TheInput>
    <div h-1px w-10 border="b base" my-4 mx-auto />
    <div my-2 />
    <p text-center op50 my-2>
      准备好了？
    </p>
    <div v-if="content.name !== ''">
      <button btn-light w-full @click="$router.push('/play')">
        继续上次 【{{ content.name }}】
      </button>
      <p text-center op50 my-2>
        或 开始新的内容
      </p>
    </div>
    <ContentsList />

    <!-- <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div> -->
  </div>
</template>
