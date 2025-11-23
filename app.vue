<script setup lang="ts">
import { generatePersonSchema } from '~/utils/schema'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        generatePersonSchema()
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
