<script setup lang="ts">
import { links } from '~/data/links'
</script>

<template>
  <UiSection id="contact" title="Get In Touch" subtitle="Let's build something amazing together" dark>
    <div class="max-w-4xl mx-auto bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 text-center" v-motion-slide-visible-once-bottom>
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
        Have a project in mind?
      </h3>
      <p class="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
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
