<script setup lang="ts">
defineProps<{
  hover?: boolean
}>()
</script>

<template>
  <div
    class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
    :class="[
      hover ? 'hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300' : ''
    ]"
  >
    <slot />
  </div>
</template>
