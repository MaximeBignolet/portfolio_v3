<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  eyebrow: string
  title: string
  intro?: string
  tight?: boolean
}>(), {
  intro: undefined,
  tight: false
})
</script>

<template>
  <section
    :id="id"
    class="scroll-mt-20"
    :class="tight ? 'pb-14 sm:pb-20 lg:pb-28' : 'py-14 sm:py-20 lg:py-28'"
  >
    <div class="wrap">
      <div class="mb-8 grid gap-3 md:mb-14 md:grid-cols-12 md:gap-x-16 md:gap-y-6">
        <div class="md:col-span-4">
          <p class="eyebrow">{{ eyebrow }}</p>
          <h2 class="mt-2 text-[clamp(28px,7.5vw,44px)] md:text-[clamp(32px,3.6vw,44px)]">
            {{ title }}
          </h2>
        </div>
        <p v-if="intro" class="max-w-[58ch] text-ink-2 md:col-span-8 md:pt-2 md:text-[17.5px]">
          {{ intro }}
        </p>
      </div>
      <slot />
    </div>
  </section>
</template>
