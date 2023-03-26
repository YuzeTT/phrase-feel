<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    <div i-ri-ancient-pavilion-fill text-4xl inline-block bg-indigo-500 />
    <p>句情</p>
    <p>
      <em text-sm op75>在剧情中爽背古文</em>
    </p>

    <div py-4 />

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

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
