<script setup lang="ts">
import { links } from '~/data/links'

const { t } = useI18n()
const localePath = useLocalePath()

const external = computed(() => [
  { label: 'LinkedIn', meta: 'maxime-bignolet', href: links.linkedin },
  { label: 'GitHub', meta: 'MaximeBignolet', href: links.github },
  { label: 'Malt', meta: t('contact.malt'), href: links.malt }
])

const rowClass = 'flex items-center justify-between gap-3 border-b border-bg/20 py-3 text-base transition-colors hover:text-accent'
</script>

<template>
  <section id="contact" class="scroll-mt-20 bg-ink text-bg">
    <div class="wrap grid gap-9 py-14 sm:py-20 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-28">
      <div class="lg:col-span-7">
        <p class="eyebrow text-bg/60">{{ t('contact.eyebrow') }}</p>
        <h2 class="mt-2.5 text-[clamp(30px,8vw,60px)] lg:text-[clamp(36px,5vw,60px)]">{{ t('contact.title') }}</h2>
        <p class="mt-3.5 max-w-[46ch] text-bg/80">{{ t('contact.intro') }}</p>
        <a
          :href="`mailto:${links.email}`"
          class="mt-[22px] inline-block border-b-2 border-accent pb-0.5 font-display text-[clamp(18px,5.2vw,30px)] font-semibold [overflow-wrap:anywhere] transition-colors hover:text-accent"
        >
          {{ links.email }}
        </a>
      </div>
      <ul class="grid gap-2 lg:col-span-5 lg:gap-2.5">
        <li v-for="item in external" :key="item.label">
          <a :href="item.href" target="_blank" rel="noopener noreferrer" :class="rowClass">
            <span>{{ item.label }}</span>
            <span class="text-right font-mono text-[12.5px] opacity-70">{{ item.meta }}</span>
          </a>
        </li>
        <li>
          <NuxtLink :to="localePath('resume')" :class="rowClass">
            <span>{{ t('navigation.resume') }}</span>
            <span class="text-right font-mono text-[12.5px] opacity-70">{{ t('contact.cv') }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
