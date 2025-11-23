<script setup lang="ts">
import { skills } from '~/data/skills'

const categories = ['Frontend Development', 'Development Tools', 'Backend & Architecture'] as const
</script>

<template>
  <UiSection id="skills" title="Skills" subtitle="Technologies I work with">
    <div class="grid gap-12">
      <div v-for="category in categories" :key="category" v-animate-on-scroll>
        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="w-8 h-1 bg-primary-500 rounded-full" aria-hidden="true"/>
          {{ category }}
        </h3>
        
        <ul class="flex flex-wrap gap-4">
          <li
            v-for="skill in skills.filter(s => s.category === category)"
            :key="skill.name"
            class="group relative bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 border border-slate-700 hover:border-primary-500/50"
          >
            <div class="flex items-center gap-3">
              <!-- Icon placeholder logic could go here based on skill name -->
              <Icon name="ph:check-circle-bold" class="text-primary-500 w-5 h-5" aria-hidden="true" />
              <span class="font-medium text-slate-200">{{ skill.name }}</span>
            </div>
            
            <!-- Optional Level Indicator -->
            <div v-if="skill.level" class="absolute bottom-0 left-0 h-1 bg-primary-500/20 w-full rounded-b-xl overflow-hidden" role="progressbar" :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="5" :aria-label="`Skill level: ${skill.level} out of 5`">
              <div class="h-full bg-primary-500 transition-all duration-500" :style="{ width: `${(skill.level / 5) * 100}%` }"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </UiSection>
</template>
