<script setup lang="ts">
import { generateProfilePageSchema, generateWebsiteSchema } from '~/utils/schema'
import { getPersonalInfo } from '~/data/links'

const { locale, t } = useI18n()
const personalInfo = computed(() => getPersonalInfo(locale.value))
const url = locale.value === 'en' ? 'https://maximedev.fr/en' : 'https://maximedev.fr'

const seo = useSeo({
  title: t('seo.homeTitle'),
  description: personalInfo.value.shortBio,
  image: locale.value === 'en' ? 'https://maximedev.fr/images/og-en.png' : 'https://maximedev.fr/images/og.png',
  url,
  type: 'website'
})

useHead({
  ...seo,
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        generateWebsiteSchema({ personalInfo: personalInfo.value, locale: locale.value }),
        generateProfilePageSchema({ personalInfo: personalInfo.value, locale: locale.value })
      ])
    }
  ]
})
</script>

<template>
  <div>
    <SectionsHero />
    <SectionsProof />
    <SectionsProjects />
    <SectionsExpertise />
    <SectionsExperience />
    <SectionsContact />
  </div>
</template>
