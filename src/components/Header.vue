<script setup lang="ts">

</script>

<template>
  <div border="b base" p-3>
    <div max-w-xl mx-auto flex items-center justify-between>
      <div flex-1 flex my-auto>
        <button v-if="$route.path !== '/'" icon-btn i-ri-arrow-left-line text-xl @click="$router.push('/')" />
      </div>
      <h1 font-serif text-xl font-black text-center>
        句情
      </h1>
      <div flex-1 flex my-auto justify-end gap-3>
        <button icon-btn @click="toggleDark()">
          <div text-xl dark:i-ri-moon-line i-ri-sun-line />
        </button>
        <button
          icon-btn
          @click="$router.push('/')"
        >
          <div text-xl i-ri-information-line />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
