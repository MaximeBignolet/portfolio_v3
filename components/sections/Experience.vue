<script setup lang="ts">
import { experience } from '~/data/experience'
</script>

<template>
  <UiSection id="experience" title="Experience" subtitle="My professional career path">
    <div class="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
      <div 
        v-for="(job, index) in experience" 
        :key="index" 
        class="relative pl-8 md:pl-12"
        v-motion-slide-visible-once-bottom
        :delay="index * 100"
      >
        <!-- Timeline Dot -->
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500"></div>
        
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ job.title }}</h3>
          <span class="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
            {{ job.dates }}
          </span>
        </div>
        
        <div class="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
          {{ job.company }}
        </div>
        
        <p class="text-slate-600 dark:text-slate-400 mb-4">
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
