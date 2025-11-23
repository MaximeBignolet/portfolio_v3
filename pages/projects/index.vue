<script setup lang="ts">
import { projects } from '~/data/projects'
import { generateBreadcrumbSchema, generateCollectionPageSchema, generateProjectSchema } from '~/utils/schema'

useHead({
  title: 'Projects | Maxime Bignolet',
  meta: [
    { name: 'description', content: 'Explore my portfolio of web development projects, featuring Nuxt.js, Vue.js, and TypeScript applications.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        generateBreadcrumbSchema([
          { name: 'Home', item: '/' },
          { name: 'Projects', item: '/projects' }
        ]),
        generateCollectionPageSchema('Projects | Maxime Bignolet', 'Explore my portfolio of web development projects.'),
        ...projects.map(project => generateProjectSchema(project))
      ])
    }
  ]
})

const categories = ['All', 'Professional', 'Side Project', 'Open-source']
const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <div class="pt-24 pb-20 min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16" v-animate-on-scroll>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Featured Projects
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          A collection of my recent work, side projects, and open source contributions.
        </p>
      </div>

      <!-- Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12" v-animate-on-scroll>
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="[
            activeCategory === category
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UiCard 
          v-for="(project, index) in filteredProjects" 
          :key="project.title"
          hover
          v-animate-on-scroll
          :style="{ transitionDelay: `${index * 50}ms` }"
          as="article"
        >
          <div class="group relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
            <NuxtImg 
              v-if="project.image"
              :src="project.image" 
              :alt="`Screenshot of ${project.title}`" 
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
            
            <div class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <UiButton v-if="project.links.demo" :href="project.links.demo" size="sm" variant="primary" :aria-label="`View live demo of ${project.title}`">
                Live Demo
              </UiButton>
              <UiButton v-if="project.links.github" :href="project.links.github" size="sm" variant="secondary" :aria-label="`View source code of ${project.title} on GitHub`">
                GitHub
              </UiButton>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
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
            
            <div class="flex flex-wrap gap-2" aria-label="Technologies used">
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
    </div>
  </div>
</template>
