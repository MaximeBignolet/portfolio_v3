<script setup lang="ts">
import { personalInfo } from '~/data/links'
</script>

<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-20 right-10 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl animate-pulse will-change-transform"/>
      <div class="absolute bottom-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform"/>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div v-animate-on-scroll class="space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 mb-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"/>
          </span>
          Available for work
        </div>

        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6">
          <span class="sr-only">Portfolio of </span>{{ personalInfo.name }}
        </h1>
        
        <h2 class="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          {{ personalInfo.title }}
        </h2>
        
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          {{ personalInfo.shortBio }}
          <br>
          <span class="text-sm mt-2 block opacity-80">Based in {{ personalInfo.location }}</span>
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UiButton to="#projects" size="lg" aria-label="View my projects">
            View Projects
          </UiButton>
          <UiButton to="#contact" variant="outline" size="lg" aria-label="Contact me">
            Contact Me
          </UiButton>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
      <Icon name="ph:arrow-down-bold" class="w-6 h-6" />
    </div>
  </section>
</template>
