<script setup lang="ts">
import { generatePersonSchema, generateWebsiteSchema } from '~/utils/schema'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        generatePersonSchema(),
        generateWebsiteSchema()
      ])
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
