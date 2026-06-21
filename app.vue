<script setup lang="ts">
import { generatePersonSchema } from '~/utils/schema'
import { getPersonalInfo } from '~/data/links'
import { getSkills } from '~/data/skills'

const { locale } = useI18n()
const i18nHead = useLocaleHead({ seo: true })
const personalInfo = computed(() => getPersonalInfo(locale.value))
const skills = computed(() => getSkills(locale.value))

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        generatePersonSchema({
          personalInfo: personalInfo.value,
          skills: skills.value,
          locale: locale.value
        })
      ])
    }
  ]
}))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
