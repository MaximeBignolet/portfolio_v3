<script setup lang="ts">
import { getEducation } from '~/data/education'
import { getExperience } from '~/data/experience'
import { getSkills } from '~/data/skills'
import { getPersonalInfo, links } from '~/data/links'

import { generateBreadcrumbSchema } from '~/utils/schema'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const personalInfo = computed(() => getPersonalInfo(locale.value))
const experience = computed(() => getExperience(locale.value))
const skills = computed(() => getSkills(locale.value))
const education = computed(() => getEducation(locale.value))
const url = locale.value === 'en' ? 'https://maximedev.fr/en/resume' : 'https://maximedev.fr/resume'

const seo = useSeo({
  title: t('seo.resumeTitle'),
  description: t('seo.resumeDescription', {
    name: personalInfo.value.name,
    title: personalInfo.value.title
  }),
  url,
  type: 'profile'
})

useHead({
  ...seo,
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        generateBreadcrumbSchema([
          { name: t('seo.home'), item: localePath('index') },
          { name: t('seo.resume'), item: localePath('resume') }
        ])
      ])
    }
  ]
})

function printResume(): void {
  window.print()
}
</script>

<template>
  <div class="pt-20 sm:pt-24 pb-14 sm:pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      
      <!-- Actions -->
      <div class="flex justify-stretch sm:justify-end mb-6 sm:mb-8 print:hidden">
        <UiButton variant="outline" class="w-full sm:w-auto" @click="printResume">
          <Icon name="ph:printer-bold" class="w-5 h-5 mr-2" />
          {{ t('resume.print') }}
        </UiButton>
      </div>

      <!-- Resume Paper -->
      <div class="bg-white dark:bg-slate-900 p-5 sm:p-6 md:p-10 lg:p-12 rounded-xl shadow-sm print:shadow-none print:p-0">
        
        <!-- Header -->
        <header class="border-b border-slate-200 dark:border-slate-700 pb-6 sm:pb-8 mb-6 sm:mb-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{{ personalInfo.name }}</h1>
            <h2 class="text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4 leading-tight">{{ personalInfo.title }}</h2>
            <p class="text-slate-600 dark:text-slate-400 max-w-lg text-sm leading-relaxed">
              {{ personalInfo.shortBio }}
            </p>
          </div>
          
          <div class="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 break-all">
            <a :href="`mailto:${links.email}`" class="flex items-center gap-2 hover:text-primary-600 transition-colors">
              <Icon name="ph:envelope-simple-bold" class="w-4 h-4" />
              {{ links.email }}
            </a>
            <a :href="links.linkedin" target="_blank" class="flex items-center gap-2 hover:text-primary-600 transition-colors">
              <Icon name="ph:linkedin-logo-bold" class="w-4 h-4" />
              {{ t('resume.linkedin') }}
            </a>
            <a :href="links.github" target="_blank" class="flex items-center gap-2 hover:text-primary-600 transition-colors">
              <Icon name="ph:github-logo-bold" class="w-4 h-4" />
              {{ t('resume.github') }}
            </a>
            <div class="flex items-center gap-2">
              <Icon name="ph:map-pin-bold" class="w-4 h-4" />
              {{ personalInfo.location }}
            </div>
          </div>
        </header>

        <div class="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          
          <!-- Main Column -->
          <div class="md:col-span-2 space-y-8">
            <section>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">{{ t('resume.experience') }}</h3>
              <div class="space-y-8">
                <div v-for="(job, index) in experience" :key="index">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-3 mb-1">
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{{ job.title }}</h4>
                    <span class="text-sm text-slate-500 dark:text-slate-400 shrink-0">{{ job.dates }}</span>
                  </div>
                  <div class="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">{{ job.company }}</div>
                  <p class="text-slate-600 dark:text-slate-400 text-sm mb-2">{{ job.description }}</p>
                  <ul class="list-disc list-outside ml-4 space-y-1">
                    <li v-for="(bullet, bIndex) in job.bullets" :key="bIndex" class="text-slate-600 dark:text-slate-400 text-sm pl-1">
                      {{ bullet }}
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <section>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">{{ t('resume.skills') }}</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in skills" 
                  :key="skill.name"
                  class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                >
                  {{ skill.name }}
                </span>
              </div>
            </section>

            <section>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">{{ t('resume.education') }}</h3>
              <div class="space-y-4">
                <div v-for="educationItem in education" :key="educationItem.title">
                  <h4 class="font-bold text-slate-900 dark:text-white text-sm">{{ educationItem.title }}</h4>
                  <div class="text-slate-500 dark:text-slate-400 text-xs">{{ educationItem.school }} • {{ educationItem.dates }}</div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">{{ t('resume.languages') }}</h3>
              <div class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div class="flex justify-between">
                  <span>{{ t('resume.french') }}</span>
                  <span class="text-slate-400">{{ t('resume.native') }}</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ t('resume.english') }}</span>
                  <span class="text-slate-400">{{ t('resume.professional') }}</span>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  @page {
    margin: 0;
  }
  body {
    background: white;
  }
  .print\:hidden {
    display: none;
  }
  .print\:shadow-none {
    box-shadow: none;
  }
  .print\:p-0 {
    padding: 0;
  }
}
</style>
