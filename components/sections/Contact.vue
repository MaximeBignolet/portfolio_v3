<script setup lang="ts">
import { links } from '~/data/links'

const { t } = useI18n()
</script>

<template>
  <UiSection id="contact" :title="t('contact.title')" :subtitle="t('contact.subtitle')">
    <div v-animate-on-scroll class="max-w-6xl mx-auto text-center">
      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8">
        {{ t('contact.intro') }}
      </p>
      
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
        <UiButton :href="`mailto:${links.email}`" size="lg" class="w-full sm:w-auto">
          <Icon name="ph:envelope-simple-bold" class="w-5 h-5 mr-2" />
          {{ t('contact.email') }}
        </UiButton>
        
        <UiButton :href="links.linkedin" variant="secondary" size="lg" class="w-full sm:w-auto">
          <Icon name="ph:linkedin-logo-bold" class="w-5 h-5 mr-2" />
          {{ t('contact.linkedin') }}
        </UiButton>

        <UiButton :href="links.malt" variant="secondary" size="lg" class="w-full sm:w-auto">
          <Icon name="ph:briefcase-bold" class="w-5 h-5 mr-2" />
          {{ t('contact.malt') }}
        </UiButton>
      </div>
      
      <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-center gap-6 sm:gap-8">
        <a :href="links.github" target="_blank" class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
          <Icon name="ph:github-logo-bold" class="w-6 h-6" />
          <span class="hidden sm:inline">GitHub</span>
        </a>
        <a :href="links.linkedin" target="_blank" class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
          <Icon name="ph:linkedin-logo-bold" class="w-6 h-6" />
          <span class="hidden sm:inline">LinkedIn</span>
        </a>
        <a :href="links.malt" target="_blank" class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
          <Icon name="ph:briefcase-bold" class="w-6 h-6" />
          <span class="hidden sm:inline">Malt</span>
        </a>
        <a :href="links.codeur" target="_blank" class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
          <Icon name="ph:code-bold" class="w-6 h-6" />
          <span class="hidden sm:inline">Codeur.com</span>
        </a>
      </div>
    </div>
  </UiSection>
</template>
