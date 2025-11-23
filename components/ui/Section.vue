<script setup lang="ts">
defineProps<{
  id?: string
  title?: string
  subtitle?: string
  dark?: boolean
}>()
</script>

<template>
  <section
    :id="id"
    class="py-20 md:py-32 relative overflow-hidden"
    :class="dark ? 'bg-slate-900 text-white' : 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white'"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div v-if="title" v-motion-slide-visible-once-bottom class="mb-12 md:mb-20 max-w-3xl">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-lg text-slate-600 dark:text-slate-400">
          {{ subtitle }}
        </p>
      </div>
      <slot />
    </div>
  </section>
</template>
