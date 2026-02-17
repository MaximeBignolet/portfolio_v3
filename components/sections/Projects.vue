<script setup lang="ts">
import { projects } from '~/data/projects'

// Show all projects on home page
const displayedProjects = projects
</script>

<template>
  <UiSection id="projects" title="Projets en avant" subtitle="Une sélection de mes réalisations récentes">
    <div class="grid md:grid-cols-2 gap-6 md:gap-8">
      <UiCard 
        v-for="(project, index) in displayedProjects" 
        :key="index"
        hover
        v-animate-on-scroll
        :style="{ transitionDelay: `${index * 100}ms` }"
        as="article"
      >
        <div class="group relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
          <NuxtImg 
            v-if="project.image"
            :src="project.image" 
            :alt="`Capture d'écran de ${project.title}`" 
            class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width="600"
            height="338"
            sizes="100vw sm:50vw md:400px"
            format="webp"
            placeholder
          />
          <div v-else class="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600 bg-slate-100 dark:bg-slate-800">
             <Icon name="ph:image" class="w-12 h-12" aria-hidden="true" />
          </div>
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-slate-900/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
            <UiButton v-if="project.links.demo" :href="project.links.demo" size="sm" variant="primary" :aria-label="`Voir la démo de ${project.title}`">
              Voir la démo
            </UiButton>
            <UiButton v-if="project.links.github" :href="project.links.github" size="sm" variant="secondary" :aria-label="`Voir le code source de ${project.title} sur GitHub`">
              Code source
            </UiButton>
          </div>
        </div>
        
        <div class="p-4 sm:p-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              <a v-if="project.links.demo" :href="project.links.demo" target="_blank" rel="noopener noreferrer" class="hover:text-primary-600 transition-colors">
                {{ project.title }}
              </a>
              <span v-else>{{ project.title }}</span>
            </h3>
            <span class="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {{ project.category }}
            </span>
          </div>
          
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4 md:hidden">
            <UiButton v-if="project.links.demo" :href="project.links.demo" size="sm" variant="primary" :aria-label="`Voir la démo de ${project.title}`">
              Voir la démo
            </UiButton>
            <UiButton v-if="project.links.github" :href="project.links.github" size="sm" variant="secondary" :aria-label="`Voir le code source de ${project.title} sur GitHub`">
              Code source
            </UiButton>
          </div>
          
          <div class="flex flex-wrap gap-2" aria-label="Technologies utilisées">
            <span 
              v-for="tech in project.techStack" 
              :key="tech"
              class="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </UiCard>
    </div>
  </UiSection>
</template>
