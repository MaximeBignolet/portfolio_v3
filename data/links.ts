import { normalizeLocale, type LocaleCode } from './i18n'

export const links = {
  email: 'portfolio.form.contact@gmail.com',
  github: 'https://github.com/MaximeBignolet',
  linkedin: 'https://www.linkedin.com/in/maxime-bignolet/',
  malt: 'https://www.malt.fr/profile/maximebignoletnuxtfrontend',
  codeur: 'https://www.codeur.com/-maximebr2ja',
  twitter: '',
  repo: 'https://github.com/MaximeBignolet/portfolio-v2'
}

export interface PersonalInfo {
  name: string
  title: string
  location: string
  shortBio: string
  eyebrow: string
  headline: string
  headlineEmphasis: string
  lede: string
  availability: string
}

export interface ProofItem {
  value: string
  label: string
}

export const personalInfoByLocale = {
  fr: {
    name: 'Maxime Bignolet',
    title: 'Développeur Frontend Nuxt.js - TypeScript / Vue.js',
    location: 'La Rochelle, France',
    shortBio: 'Maxime Bignolet, développeur frontend Nuxt et Vue.js à La Rochelle. Sites et applications rapides, accessibles et optimisés pour le SEO, en CDI ou en mission freelance.',
    eyebrow: 'Développeur frontend Nuxt · La Rochelle',
    headline: 'Des interfaces Nuxt qui chargent vite',
    headlineEmphasis: 'et vieillissent bien.',
    lede: 'Maxime Bignolet, développeur frontend Nuxt et Vue.js à La Rochelle, développeur depuis 2023 en agence sur des sites à fort trafic. Vue 3, TypeScript, Tailwind, et une vraie attention aux Core Web Vitals, à l’accessibilité et au code que l’on relit six mois plus tard. Côté API, je parle NestJS.',
    availability: 'Disponible pour un CDI ou une mission'
  },
  en: {
    name: 'Maxime Bignolet',
    title: 'Nuxt.js Frontend Developer - TypeScript / Vue.js',
    location: 'La Rochelle, France',
    shortBio: 'Maxime Bignolet, Nuxt and Vue.js frontend developer in La Rochelle, France. Fast, accessible, SEO-ready websites and web apps, full-time or freelance.',
    eyebrow: 'Nuxt frontend developer · La Rochelle, France',
    headline: 'Nuxt interfaces that load fast',
    headlineEmphasis: 'and age well.',
    lede: 'Maxime Bignolet, Nuxt and Vue.js frontend developer based in La Rochelle, France, developer since 2023 in an agency on high-traffic websites. Vue 3, TypeScript, Tailwind, and real care for Core Web Vitals, accessibility and code you can still read six months later. On the API side, I speak NestJS.',
    availability: 'Open to a full-time role or a freelance mission'
  }
} satisfies Record<LocaleCode, PersonalInfo>

export const proofByLocale = {
  fr: [
    { value: '−40 %', label: 'de temps de chargement sur un site client à fort trafic' },
    { value: '90+', label: 'score Lighthouse après optimisation LCP et CLS' },
    { value: '−30 %', label: 'de temps de développement grâce à un design system Tailwind' }
  ],
  en: [
    { value: '−40%', label: 'load time on a high-traffic client website' },
    { value: '90+', label: 'Lighthouse score after LCP and CLS optimisation' },
    { value: '−30%', label: 'development time thanks to a Tailwind design system' }
  ]
} satisfies Record<LocaleCode, ProofItem[]>

export const personalInfo = personalInfoByLocale.fr

export function getPersonalInfo(locale: string): PersonalInfo {
  return personalInfoByLocale[normalizeLocale(locale)]
}

export function getProof(locale: string): ProofItem[] {
  return proofByLocale[normalizeLocale(locale)]
}
