<script setup lang="ts">
import { generateWebsiteSchema } from '~/utils/schema'
import { personalInfo } from '~/data/links'

const seo = useSeo({
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.shortBio,
  image: 'https://maximedev.fr/images/me.pdp.png',
  url: 'https://maximedev.fr',
  type: 'website'
})

useHead({
  ...seo,
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
