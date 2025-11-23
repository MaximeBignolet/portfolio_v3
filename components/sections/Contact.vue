<script setup lang="ts">
import { links } from '~/data/links'
</script>

<template>
  <UiSection id="contact" title="Contact" subtitle="Let's work together">
    <div class="max-w-xl mx-auto text-center" v-animate-on-scroll>
      <p class="text-lg text-slate-600 dark:text-slate-300 mb-8">
        I’m always open to new opportunities, collaborations, or simply a chat about all things web development.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <UiButton :href="`mailto:${links.email}`" size="lg">
          <Icon name="ph:envelope-simple-bold" class="w-5 h-5 mr-2" />
          Send me an email
        </UiButton>
        
        <UiButton :href="links.linkedin" variant="secondary" size="lg">
          <Icon name="ph:linkedin-logo-bold" class="w-5 h-5 mr-2" />
          Connect on LinkedIn
        </UiButton>
      </div>
      
      <div class="mt-12 pt-8 border-t border-slate-700 flex justify-center gap-8">
        <a :href="links.github" target="_blank" class="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
          <Icon name="ph:github-logo-bold" class="w-6 h-6" />
          <span class="hidden sm:inline">GitHub</span>
        </a>
        <a :href="links.linkedin" target="_blank" class="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
          <Icon name="ph:linkedin-logo-bold" class="w-6 h-6" />
          <span class="hidden sm:inline">LinkedIn</span>
        </a>
      </div>
    </div>
  </UiSection>
</template>
