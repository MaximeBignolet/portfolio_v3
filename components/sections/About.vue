<script setup lang="ts">
import { personalInfo } from '~/data/links'
</script>

<template>
  <UiSection id="about" title="À propos" subtitle="Mon parcours dans le développement web">
    <div class="gap-8 md:gap-12 items-center">
      <div v-animate-on-scroll>
        <div class="prose dark:prose-invert max-w-none text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          <p class="whitespace-pre-line" v-html="personalInfo.about"/>
        </div>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <h4 class="font-bold text-2xl text-primary-600 dark:text-primary-400 mb-1">2+</h4>
            <p class="text-sm text-slate-500 dark:text-slate-400">Années d'expérience</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
            <h4 class="font-bold text-2xl text-primary-600 dark:text-primary-400 mb-1">10+</h4>
            <p class="text-sm text-slate-500 dark:text-slate-400">Projets réalisés</p>
          </div>
        </div>
      </div>
    </div>
  </UiSection>
</template>
