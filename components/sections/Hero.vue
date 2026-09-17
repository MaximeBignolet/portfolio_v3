<script setup lang="ts">
import { getPersonalInfo, links } from '~/data/links'

const { locale, t } = useI18n()
const personalInfo = computed(() => getPersonalInfo(locale.value))
</script>

<template>
  <section class="pb-12 pt-10 sm:pb-[72px] sm:pt-16 lg:pb-[88px] lg:pt-[104px]">
    <div class="wrap grid gap-9 lg:grid-cols-12 lg:items-end lg:gap-20">
      <div class="lg:col-span-7">
        <p class="eyebrow">{{ personalInfo.eyebrow }}</p>
        <h1 class="mb-5 mt-3.5 text-[clamp(36px,10vw,78px)] sm:mb-6 sm:mt-4 sm:text-[clamp(44px,7vw,78px)] lg:max-w-[14ch] lg:text-[clamp(56px,5.6vw,78px)]">
          {{ personalInfo.headline }}
          <span class="text-accent">{{ personalInfo.headlineEmphasis }}</span>
        </h1>
        <p class="max-w-[52ch] text-[17px] text-ink-2 sm:text-[19px] lg:text-xl">
          {{ personalInfo.lede }}
        </p>
        <div class="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
          <UiButton to="#projets" class="flex-[1_1_160px] sm:flex-none">
            {{ t('hero.projectsCta') }}
          </UiButton>
          <UiButton :href="`mailto:${links.email}`" variant="ghost" class="flex-[1_1_160px] sm:flex-none">
            {{ t('hero.emailCta') }}
          </UiButton>
        </div>
      </div>

      <div class="relative mb-9 w-full max-w-[320px] lg:col-span-5 lg:mb-0 lg:max-w-none">
        <div class="absolute -bottom-3.5 -right-3.5 left-3.5 top-3.5 rounded bg-photo/35" aria-hidden="true" />
        <NuxtImg
          src="/images/avatar.png"
          :alt="t('hero.portraitAlt', { name: personalInfo.name })"
          class="relative aspect-square w-full rounded object-cover lg:aspect-[4/5] lg:object-[50%_30%]"
          width="640"
          height="800"
          sizes="320px lg:460px"
          format="webp"
          fetchpriority="high"
        />
        <p class="absolute -bottom-3 left-0 flex translate-y-full items-center gap-2 whitespace-nowrap font-mono text-xs text-muted">
          <span class="h-2 w-2 rounded-full bg-accent ring-4 ring-accent/20" aria-hidden="true" />
          {{ personalInfo.availability }}
        </p>
      </div>
    </div>
  </section>
</template>
