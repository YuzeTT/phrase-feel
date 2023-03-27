<template>
  <div text-center>
    <div h-1px w-10 border="b base" my-4 mx-auto />
    <nav text-xl mt-6 inline-flex gap-2>
      <button icon-btn @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </button>

      <a
        icon-btn i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
        title="GitHub"
      />
    </nav>
  </div>
</template>
