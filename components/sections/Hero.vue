<script setup lang="ts">
import { getPersonalInfo } from '~/data/links'

const { locale, t } = useI18n()
const personalInfo = computed(() => getPersonalInfo(locale.value))
</script>

<template>
  <section class="min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-16 -right-12 sm:right-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl animate-pulse will-change-transform"/>
      <div class="absolute bottom-10 -left-16 sm:left-10 w-56 h-56 sm:w-72 sm:h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform"/>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div v-animate-on-scroll class="space-y-5 sm:space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mb-3 sm:mb-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"/>
          </span>
          {{ t('hero.available') }}
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4 sm:mb-6">
          <span class="sr-only">{{ t('hero.portfolioOf') }}</span>{{ personalInfo.name }}
        </h1>
        
        <h2 class="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-tight">
          {{ personalInfo.title }}
        </h2>
        
        <p class="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          {{ personalInfo.shortBio }}
          <br>
          <span class="text-sm mt-2 block opacity-80">{{ t('hero.location', { location: personalInfo.location }) }}</span>
        </p>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <UiButton to="#projects" size="lg" class="w-full sm:w-auto" :aria-label="t('hero.projectsAria')">
            {{ t('hero.projects') }}
          </UiButton>
          <UiButton to="#contact" variant="outline" size="lg" class="w-full sm:w-auto" :aria-label="t('hero.contactAria')">
            {{ t('hero.contact') }}
          </UiButton>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
      <Icon name="ph:arrow-down-bold" class="w-6 h-6" />
    </div>
  </section>
</template>
