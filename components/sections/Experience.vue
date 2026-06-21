<script setup lang="ts">
import { getExperience } from '~/data/experience'

const { locale, t } = useI18n()
const experience = computed(() => getExperience(locale.value))
</script>

<template>
  <UiSection id="experience" :title="t('experience.title')" :subtitle="t('experience.subtitle')">
    <div class="relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 sm:ml-3 md:ml-6 space-y-10 md:space-y-12">
      <div 
        v-for="(job, index) in experience" 
        :key="index" 
        v-animate-on-scroll
        class="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 pb-10 md:pb-12 last:pb-0"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <!-- Timeline Dot -->
        <div class="absolute -left-[8px] top-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500"/>
        
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{{ job.title }}</h3>
          <span class="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
            {{ job.dates }}
          </span>
        </div>
        
        <div class="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">
          {{ job.company }}
        </div>
        
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">
          {{ job.description }}
        </p>
        
        <ul class="space-y-2">
          <li v-for="(bullet, bIndex) in job.bullets" :key="bIndex" class="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
            <Icon name="ph:caret-right-bold" class="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>
    </div>
  </UiSection>
</template>
