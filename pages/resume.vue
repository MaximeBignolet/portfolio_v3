<script setup lang="ts">
import { experience } from '~/data/experience'
import { skills } from '~/data/skills'
import { personalInfo, links } from '~/data/links'

useHead({
  title: 'Resume | Maxime Bignolet',
  meta: [
    { name: 'description', content: 'Professional resume of Maxime Bignolet.' }
  ]
})

const printResume = () => {
  window.print()
}
</script>

<template>
  <div class="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      
      <!-- Actions -->
      <div class="flex justify-end mb-8 print:hidden">
        <UiButton @click="printResume" variant="outline">
          <Icon name="ph:printer-bold" class="w-5 h-5 mr-2" />
          Print / Save PDF
        </UiButton>
      </div>

      <!-- Resume Paper -->
      <div class="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-xl shadow-sm print:shadow-none print:p-0">
        
        <!-- Header -->
        <header class="border-b border-slate-200 dark:border-slate-700 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{{ personalInfo.name }}</h1>
            <h2 class="text-xl text-primary-600 dark:text-primary-400 font-medium mb-4">{{ personalInfo.title }}</h2>
            <p class="text-slate-600 dark:text-slate-400 max-w-lg text-sm leading-relaxed">
              {{ personalInfo.shortBio }}
            </p>
          </div>
          
          <div class="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
            <a :href="`mailto:${links.email}`" class="flex items-center gap-2 hover:text-primary-600 transition-colors">
              <Icon name="ph:envelope-simple-bold" class="w-4 h-4" />
              {{ links.email }}
            </a>
            <a :href="links.linkedin" target="_blank" class="flex items-center gap-2 hover:text-primary-600 transition-colors">
              <Icon name="ph:linkedin-logo-bold" class="w-4 h-4" />
              LinkedIn Profile
            </a>
            <a :href="links.github" target="_blank" class="flex items-center gap-2 hover:text-primary-600 transition-colors">
              <Icon name="ph:github-logo-bold" class="w-4 h-4" />
              GitHub Profile
            </a>
            <div class="flex items-center gap-2">
              <Icon name="ph:map-pin-bold" class="w-4 h-4" />
              {{ personalInfo.location }}
            </div>
          </div>
        </header>

        <div class="grid md:grid-cols-3 gap-8 md:gap-12">
          
          <!-- Main Column -->
          <div class="md:col-span-2 space-y-8">
            <section>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Experience</h3>
              <div class="space-y-8">
                <div v-for="(job, index) in experience" :key="index">
                  <div class="flex justify-between items-baseline mb-1">
                    <h4 class="font-bold text-slate-900 dark:text-white">{{ job.title }}</h4>
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
              <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Skills</h3>
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
              <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Education</h3>
              <div class="space-y-4">
                 <!-- Inferred from experience or generic -->
                 <div>
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm">Bachelor’s Degree</h4>
                    <div class="text-slate-500 dark:text-slate-400 text-xs">OpenClassrooms • 2023-2024</div>
                 </div>
                 <div>
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm">Web Developer Diploma</h4>
                    <div class="text-slate-500 dark:text-slate-400 text-xs">OpenClassrooms • 2022-2023</div>
                 </div>
              </div>
            </section>

            <section>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Languages</h3>
              <div class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div class="flex justify-between">
                  <span>French</span>
                  <span class="text-slate-400">Native</span>
                </div>
                <div class="flex justify-between">
                  <span>English</span>
                  <span class="text-slate-400">Professional</span>
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
