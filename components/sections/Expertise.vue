<script setup lang="ts">
import { getExpertise, stack } from '~/data/skills'

const { locale, t } = useI18n()
const groups = computed(() => getExpertise(locale.value))
</script>

<template>
  <UiSection id="expertise" :eyebrow="t('expertise.eyebrow')" :title="t('expertise.title')" :intro="t('expertise.intro')" tight>
    <div class="grid overflow-hidden rounded border border-line bg-surface lg:grid-cols-3">
      <article
        v-for="(group, index) in groups"
        :key="group.title"
        class="grid content-start gap-3.5 px-[18px] py-[22px] lg:p-8"
        :class="index > 0 ? 'border-t border-line lg:border-l lg:border-t-0' : ''"
      >
        <h3 class="text-xl lg:text-[21px]">{{ group.title }}</h3>
        <ul class="grid gap-2">
          <li
            v-for="item in group.items"
            :key="item"
            class="relative pl-[18px] text-[15px] text-ink-2 before:absolute before:left-0 before:top-[11px] before:h-[1.5px] before:w-2 before:bg-accent lg:text-[15.5px]"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>

    <p class="mt-5 grid gap-2 font-mono text-[13px] leading-[1.7] text-muted lg:grid-flow-col lg:justify-start lg:gap-7 lg:text-[13.5px]">
      <span><b class="font-medium text-ink">{{ t('expertise.daily') }}</b> {{ stack.daily.join(' · ') }}</span>
      <span><b class="font-medium text-ink">{{ t('expertise.also') }}</b> {{ stack.also.join(' · ') }}</span>
    </p>
  </UiSection>
</template>
