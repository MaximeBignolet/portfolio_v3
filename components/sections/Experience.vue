<script setup lang="ts">
import { getExperience } from '~/data/experience'

const { locale, t } = useI18n()
const experience = computed(() => getExperience(locale.value))
</script>

<template>
  <UiSection id="parcours" :eyebrow="t('experience.eyebrow')" :title="t('experience.title')" tight>
    <ol class="border-t border-line">
      <li
        v-for="job in experience"
        :key="job.title"
        class="grid gap-1.5 border-b border-line py-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-x-8 sm:gap-y-2 sm:py-[22px]"
      >
        <time class="font-mono text-[13px] tabular-nums text-muted sm:pt-1 sm:text-[13.5px]">{{ job.dates }}</time>
        <div>
          <h3 class="text-[19px] sm:text-xl">
            {{ job.title }}
            <span class="ml-2 inline-block rounded-full border border-line-strong px-[7px] py-0.5 align-middle font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
              {{ t(`experience.kind.${job.type}`) }}
            </span>
          </h3>
          <p class="mt-0.5 text-[15px] text-teal">{{ job.company }}</p>
          <p class="mt-2 max-w-[64ch] text-[15px] text-ink-2">{{ job.description }}</p>
        </div>
      </li>
    </ol>
  </UiSection>
</template>
