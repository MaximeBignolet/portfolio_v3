<script setup lang="ts">
import { generateWebsiteSchema } from '~/utils/schema'

useHead({
  title: 'Maxime Bignolet | Front-end Developer',
  meta: [
    { name: 'description', content: 'Front-end Developer specialized in Nuxt.js and TypeScript. Building performant and maintainable interfaces.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateWebsiteSchema())
    }
  ]
})
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsAbout />
    <SectionsSkills />
    <SectionsExperience />
    <SectionsProjects />
    <SectionsContact />
  </div>
</template>
