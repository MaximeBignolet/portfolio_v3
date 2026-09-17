import { normalizeLocale, type LocaleCode } from './i18n'

export type ProjectCategory = 'personal' | 'demo'

export interface CaseStudy {
  eyebrow: string
  idea: string
  done: string
  learned: string
}

export interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  links: {
    demo?: string
    github?: string
  }
  category: ProjectCategory
  tag: string
  dateCreated: string
  caseStudy?: CaseStudy
}

export const projectsByLocale = {
  fr: [
    {
      title: 'Landlify',
      description: 'Plateforme de gestion immobilière : biens, documents, tableaux de bord pour bailleurs.',
      techStack: ['Nuxt', 'TypeScript', 'Tailwind', 'Dashboard', 'Gestion de données'],
      image: '/images/landlify.png',
      links: {
        demo: 'https://landlify.vercel.app/'
      },
      category: 'personal',
      tag: 'Projet perso',
      dateCreated: '2024-08-01',
      caseStudy: {
        eyebrow: 'Gestion immobilière',
        idea: 'Un outil simple pour qu’un bailleur suive ses biens, ses documents et ses chiffres au même endroit.',
        done: 'Tableaux de bord, formulaires métier, organisation documentaire, le tout typé de bout en bout.',
        learned: 'Structurer une vraie app Nuxt avec beaucoup d’état, pas seulement une landing.'
      }
    },
    {
      title: 'Template landing SaaS',
      description: 'Landing modulaire Nuxt 3 et Tailwind, typée de bout en bout, pensée pour la conversion.',
      techStack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Swiper.js', 'SEO'],
      image: '/images/landing.png',
      links: {
        demo: 'https://template-landing-saas.vercel.app/'
      },
      category: 'personal',
      tag: 'Nuxt 3',
      dateCreated: '2024-01-15'
    },
    {
      title: 'I Wish There Was',
      description: 'Application web de collecte de besoins produit, stack récente et interface sobre.',
      techStack: ['Développement web', 'Stack moderne'],
      image: '/images/i-wish-there-was.png',
      links: {
        demo: 'https://i-wish-there-was.com/'
      },
      category: 'personal',
      tag: 'Perso',
      dateCreated: '2024-06-01'
    },
    {
      title: 'Dupont Plomberie',
      description: 'Site vitrine d’artisan : structure orientée conversion, galerie, devis, SEO local.',
      techStack: ['Développement web', 'Responsive design', 'SEO'],
      image: '/images/artisan.png',
      links: {
        demo: 'https://artisan.maximedev.fr/'
      },
      category: 'demo',
      tag: 'Démo vitrine',
      dateCreated: '2024-03-01'
    },
    {
      title: 'Claire Martin Coaching',
      description: 'Site de coaching centré sur la confiance : prestations, témoignages, prise de contact.',
      techStack: ['Développement web', 'Responsive design', 'UX/UI'],
      image: '/images/coach.png',
      links: {
        demo: 'https://coach.maximedev.fr/'
      },
      category: 'demo',
      tag: 'Démo vitrine',
      dateCreated: '2024-05-01'
    }
  ],
  en: [
    {
      title: 'Landlify',
      description: 'Real estate management platform: properties, documents and dashboards for landlords.',
      techStack: ['Nuxt', 'TypeScript', 'Tailwind', 'Dashboard', 'Data management'],
      image: '/images/landlify.png',
      links: {
        demo: 'https://landlify.vercel.app/'
      },
      category: 'personal',
      tag: 'Side project',
      dateCreated: '2024-08-01',
      caseStudy: {
        eyebrow: 'Real estate management',
        idea: 'A simple tool for a landlord to track properties, documents and figures in one place.',
        done: 'Dashboards, business forms, document organisation, all typed end to end.',
        learned: 'Structuring a real Nuxt app with a lot of state, not just a landing page.'
      }
    },
    {
      title: 'SaaS landing template',
      description: 'Modular Nuxt 3 and Tailwind landing page, typed end to end, built for conversion.',
      techStack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Swiper.js', 'SEO'],
      image: '/images/landing.png',
      links: {
        demo: 'https://template-landing-saas.vercel.app/'
      },
      category: 'personal',
      tag: 'Nuxt 3',
      dateCreated: '2024-01-15'
    },
    {
      title: 'I Wish There Was',
      description: 'Web app that collects product needs, recent stack and a sober interface.',
      techStack: ['Web development', 'Modern stack'],
      image: '/images/i-wish-there-was.png',
      links: {
        demo: 'https://i-wish-there-was.com/'
      },
      category: 'personal',
      tag: 'Side project',
      dateCreated: '2024-06-01'
    },
    {
      title: 'Dupont Plomberie',
      description: 'Showcase website for a tradesman: conversion-oriented structure, gallery, quotes, local SEO.',
      techStack: ['Web development', 'Responsive design', 'SEO'],
      image: '/images/artisan.png',
      links: {
        demo: 'https://artisan.maximedev.fr/'
      },
      category: 'demo',
      tag: 'Showcase demo',
      dateCreated: '2024-03-01'
    },
    {
      title: 'Claire Martin Coaching',
      description: 'Coaching website built around trust: services, testimonials, contact.',
      techStack: ['Web development', 'Responsive design', 'UX/UI'],
      image: '/images/coach.png',
      links: {
        demo: 'https://coach.maximedev.fr/'
      },
      category: 'demo',
      tag: 'Showcase demo',
      dateCreated: '2024-05-01'
    }
  ]
} satisfies Record<LocaleCode, Project[]>

export const projects = projectsByLocale.fr

export function getProjects(locale: string): Project[] {
  return projectsByLocale[normalizeLocale(locale)]
}

export function getFeaturedProject(locale: string): Project | undefined {
  return getProjects(locale).find(project => project.caseStudy)
}

export function getOtherProjects(locale: string): Project[] {
  return getProjects(locale).filter(project => !project.caseStudy)
}
