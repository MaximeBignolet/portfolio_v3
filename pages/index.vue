<script setup lang="ts">
import { generateWebsiteSchema } from '~/utils/schema'
import { getPersonalInfo } from '~/data/links'

const { locale } = useI18n()
const personalInfo = computed(() => getPersonalInfo(locale.value))
const url = locale.value === 'en' ? 'https://maximedev.fr/en' : 'https://maximedev.fr'

const seo = useSeo({
  title: `${personalInfo.value.name} | ${personalInfo.value.title}`,
  description: personalInfo.value.shortBio,
  image: 'https://maximedev.fr/images/me.pdp.png',
  url,
  type: 'website'
})

useHead({
  ...seo,
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateWebsiteSchema({
        personalInfo: personalInfo.value,
        locale: locale.value
      }))
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
