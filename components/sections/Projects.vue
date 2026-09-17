<script setup lang="ts">
import { getFeaturedProject, getOtherProjects } from '~/data/projects'

const { locale, t } = useI18n()
const featured = computed(() => getFeaturedProject(locale.value))
const others = computed(() => getOtherProjects(locale.value))
</script>

<template>
  <UiSection id="projets" :eyebrow="t('projects.eyebrow')" :title="t('projects.title')" :intro="t('projects.intro')">
    <article
      v-if="featured && featured.caseStudy"
      class="grid gap-[22px] rounded border border-line bg-surface p-3.5 sm:p-[22px] lg:grid-cols-12 lg:gap-12 lg:p-7"
    >
      <a
        :href="featured.links.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="relative block aspect-[16/10] min-w-0 overflow-hidden rounded-[4px] border border-line bg-surface-2 lg:col-span-7"
        :aria-label="t('projects.open', { title: featured.title })"
      >
        <span class="absolute inset-x-0 top-0 z-10 flex h-[22px] items-center gap-[5px] border-b border-line bg-surface-2 px-2.5" aria-hidden="true">
          <span class="h-2 w-2 rounded-full bg-line-strong" />
          <span class="h-2 w-2 rounded-full bg-line-strong" />
          <span class="h-2 w-2 rounded-full bg-line-strong" />
        </span>
        <NuxtImg
          :src="featured.image"
          :alt="t('projects.imageAlt', { title: featured.title })"
          class="h-full w-full object-cover object-top pt-[22px]"
          width="1200"
          height="750"
          sizes="100vw md:640px"
          format="webp"
          loading="lazy"
        />
      </a>

      <div class="flex flex-col gap-4 px-1 pb-1.5 pt-1 lg:col-span-5 lg:py-1.5">
        <div>
          <p class="eyebrow">
            <span class="text-accent">{{ featured.tag }}</span> · {{ featured.caseStudy.eyebrow }}
          </p>
          <h3 class="mt-2 text-[26px] sm:text-[30px]">{{ featured.title }}</h3>
        </div>
        <dl class="grid grid-cols-[76px_1fr] gap-x-3.5 gap-y-2 text-[15px] text-ink-2 sm:grid-cols-[84px_1fr] sm:text-[15.5px]">
          <dt class="eyebrow pt-[3px] text-[11.5px] tracking-[0.06em]">{{ t('projects.idea') }}</dt>
          <dd>{{ featured.caseStudy.idea }}</dd>
          <dt class="eyebrow pt-[3px] text-[11.5px] tracking-[0.06em]">{{ t('projects.done') }}</dt>
          <dd>{{ featured.caseStudy.done }}</dd>
          <dt class="eyebrow pt-[3px] text-[11.5px] tracking-[0.06em]">{{ t('projects.learned') }}</dt>
          <dd>{{ featured.caseStudy.learned }}</dd>
        </dl>
        <p class="font-mono text-[13px] text-teal">{{ featured.techStack.join(' · ') }}</p>
        <UiButton :href="featured.links.demo" variant="ghost" class="mt-auto self-stretch sm:self-start">
          {{ t('projects.open', { title: featured.title }) }}
        </UiButton>
      </div>
    </article>

    <ul class="mt-6 border-t border-line" :aria-label="t('projects.otherList')">
      <li
        v-for="project in others"
        :key="project.title"
        class="grid grid-cols-[84px_minmax(0,1fr)] items-center gap-x-4 gap-y-1.5 border-b border-line py-4 transition-colors hover:bg-surface sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:gap-5 sm:py-[18px]"
      >
        <div class="row-span-2 aspect-[16/10] overflow-hidden rounded-[4px] border border-line bg-surface-2 sm:row-span-1">
          <NuxtImg
            :src="project.image"
            alt=""
            class="h-full w-full object-cover object-top"
            width="240"
            height="150"
            sizes="84px sm:120px"
            format="webp"
            loading="lazy"
          />
        </div>
        <div>
          <h3 class="font-display text-[17px] font-semibold sm:text-[19px]">
            <a
              v-if="project.links.demo"
              :href="project.links.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-colors hover:text-teal"
            >
              {{ project.title }}
            </a>
            <span v-else>{{ project.title }}</span>
          </h3>
          <p class="mt-[3px] text-[14.5px] text-muted sm:text-[15px]">{{ project.description }}</p>
        </div>
        <span
          class="justify-self-start whitespace-nowrap rounded-[4px] px-2 py-1 font-mono text-[11.5px] sm:justify-self-end sm:text-xs"
          :class="project.category === 'demo' ? 'bg-surface-2 text-muted' : 'bg-teal-soft text-teal'"
        >
          {{ project.tag }}
        </span>
      </li>
    </ul>
  </UiSection>
</template>
