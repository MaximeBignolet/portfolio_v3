import { normalizeLocale, type LocaleCode } from './i18n'

export interface Skill {
  name: string
}

export interface ExpertiseGroup {
  title: string
  items: string[]
}

export interface Stack {
  daily: string[]
  also: string[]
}

export const expertiseByLocale = {
  fr: [
    {
      title: 'Nuxt et Vue 3',
      items: [
        'Architecture d’apps Nuxt 3 et 4 avec TypeScript et Composition API',
        'Stratégies de rendu choisies page par page : SSR, SSG, hydratation partielle',
        'État partagé avec Pinia sans en abuser'
      ]
    },
    {
      title: 'Performance et SEO',
      items: [
        'Core Web Vitals mesurés, pas devinés : LCP, CLS, INP',
        'Images, polices et découpage de bundle sous contrôle',
        'Données structurées, i18n, sitemaps, métadonnées propres'
      ]
    },
    {
      title: 'Design system et API',
      items: [
        'Composants réutilisables, tokens Tailwind, passation Figma vers code sans perte',
        'Accessibilité intégrée dès le composant, pas en fin de sprint',
        'À l’aise côté NestJS : contrats typés partagés entre le front et l’API'
      ]
    }
  ],
  en: [
    {
      title: 'Nuxt and Vue 3',
      items: [
        'Nuxt 3 and 4 app architecture with TypeScript and the Composition API',
        'Rendering strategy chosen page by page: SSR, SSG, partial hydration',
        'Shared state with Pinia, without overusing it'
      ]
    },
    {
      title: 'Performance and SEO',
      items: [
        'Core Web Vitals measured, not guessed: LCP, CLS, INP',
        'Images, fonts and bundle splitting under control',
        'Structured data, i18n, sitemaps, clean metadata'
      ]
    },
    {
      title: 'Design system and API',
      items: [
        'Reusable components, Tailwind tokens, lossless Figma to code handoff',
        'Accessibility built into the component, not at the end of the sprint',
        'Comfortable with NestJS: typed contracts shared between front and API'
      ]
    }
  ]
} satisfies Record<LocaleCode, ExpertiseGroup[]>

export const stack: Stack = {
  daily: ['Nuxt', 'Vue 3', 'TypeScript', 'Tailwind', 'Pinia', 'Vitest'],
  also: ['NestJS', 'REST', 'Headless CMS', 'Git', 'Figma']
}

export const skills: Skill[] = [...stack.daily, ...stack.also].map(name => ({ name }))

export function getExpertise(locale: string): ExpertiseGroup[] {
  return expertiseByLocale[normalizeLocale(locale)]
}

export function getSkills(_locale: string): Skill[] {
  return skills
}
