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
  about: string
}

export const personalInfoByLocale = {
  fr: {
    name: 'Maxime Bignolet',
    title: 'Développeur Frontend Nuxt.js - TypeScript / Vue.js',
    location: 'La Rochelle, France',
    shortBio: 'Je conçois des applications web performantes et optimisées SEO avec Nuxt 3 et l’écosystème Vue.js.',
    about: `Je suis <strong>développeur frontend</strong>, spécialisé dans la création d'applications web performantes avec <strong>Nuxt.js</strong>, <strong>TypeScript</strong> et <strong>TailwindCSS</strong>. Basé à La Rochelle, je combine exigence technique et vision produit pour livrer des solutions scalables et optimisées pour le SEO.

Actuellement <strong>Frontend Engineer</strong> en agence digitale, je conçois des interfaces complexes pour des clients majeurs (comme Daikin), avec un focus sur les <strong>Core Web Vitals</strong>, l'accessibilité et la maintenabilité du code. J'ai notamment réduit les temps de chargement de 40 % et mis en place des design systems robustes qui accélèrent la production.

Ma valeur ajoutée: résoudre des enjeux business avec un code propre, type-safe et durable. Que ce soit pour optimiser les stratégies d'hydratation Nuxt ou livrer des interfaces pixel-perfect avec Tailwind, chaque ligne de code vise une meilleure expérience utilisateur et un impact mesurable.`
  },
  en: {
    name: 'Maxime Bignolet',
    title: 'Nuxt.js Frontend Developer - TypeScript / Vue.js',
    location: 'La Rochelle, France',
    shortBio: 'I build fast, SEO-focused web applications with Nuxt 3 and the Vue.js ecosystem.',
    about: `I am a <strong>frontend developer</strong> specialized in building high-performance web applications with <strong>Nuxt.js</strong>, <strong>TypeScript</strong> and <strong>TailwindCSS</strong>. Based in La Rochelle, I combine technical standards with product thinking to deliver scalable, SEO-friendly solutions.

I currently work as a <strong>Frontend Engineer</strong> in a digital agency, where I build complex interfaces for major clients such as Daikin, with a focus on <strong>Core Web Vitals</strong>, accessibility and maintainable code. I have reduced load times by 40% and shipped robust design systems that speed up production.

My added value: solving business problems with clean, type-safe and durable code. Whether I am optimizing Nuxt hydration strategies or delivering pixel-perfect interfaces with Tailwind, every line of code is written to improve the user experience and create measurable impact.`
  }
} satisfies Record<LocaleCode, PersonalInfo>

export const personalInfo = personalInfoByLocale.fr

export function getPersonalInfo(locale: string): PersonalInfo {
  return personalInfoByLocale[normalizeLocale(locale)]
}
