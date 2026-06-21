import { normalizeLocale, type LocaleCode } from './i18n'

export type ProjectCategory = 'professional' | 'openSource' | 'personal'

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
  dateCreated: string
}

export const projectCategoryLabels = {
  fr: {
    professional: 'Professionnel',
    openSource: 'Open source',
    personal: 'Projet perso'
  },
  en: {
    professional: 'Professional',
    openSource: 'Open source',
    personal: 'Personal project'
  }
} satisfies Record<LocaleCode, Record<ProjectCategory, string>>

export const projectsByLocale = {
  fr: [
    {
      title: 'SaaS Landing Page Template',
      description: 'Template de landing page performant et optimisé pour la conversion, construit avec Nuxt 3 et TailwindCSS. Conçu pour les entreprises SaaS, il propose une architecture modulaire, une structure SEO-friendly et des animations fluides avec Swiper.js. Entièrement typé en TypeScript pour faciliter la maintenabilité.',
      techStack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Swiper.js', 'SEO'],
      image: '/images/landing.png',
      links: {
        demo: 'https://template-landing-saas.vercel.app/'
      },
      category: 'personal',
      dateCreated: '2024-01-15'
    },
    {
      title: 'Dupont Plomberie - Artisan Website',
      description: 'Site vitrine professionnel pour une entreprise de plomberie et chauffage à La Rochelle. Il inclut un design moderne et responsive, une mise en avant des services, une galerie de réalisations et des formulaires de contact. Le projet a été pensé pour la conversion et l\'expérience utilisateur.',
      techStack: ['Développement web', 'Responsive design', 'SEO'],
      image: '/images/artisan.png',
      links: {
        demo: 'https://artisan.maximedev.fr/'
      },
      category: 'professional',
      dateCreated: '2024-03-01'
    },
    {
      title: 'Claire Martin Coaching',
      description: 'Site de coaching professionnel présentant des prestations de développement personnel et professionnel. Il comprend des présentations de services, des témoignages et des formulaires de contact. Le design est centré sur la confiance et l\'engagement client.',
      techStack: ['Développement web', 'Responsive design', 'UX/UI'],
      image: '/images/coach.png',
      links: {
        demo: 'https://coach.maximedev.fr/'
      },
      category: 'professional',
      dateCreated: '2024-05-01'
    },
    {
      title: 'I Wish There Was',
      description: 'Projet d\'application web avec des fonctionnalités innovantes et un design moderne. Construit avec une stack récente pour offrir une expérience utilisateur premium.',
      techStack: ['Développement web', 'Stack moderne'],
      image: '/images/i-wish-there-was.png',
      links: {
        demo: 'https://i-wish-there-was.com/'
      },
      category: 'personal',
      dateCreated: '2024-06-01'
    },
    {
      title: 'Landlify - Real Estate Management',
      description: 'Plateforme complète de gestion immobilière. Elle inclut la gestion des biens, l\'organisation documentaire et des tableaux de bord analytiques. Le produit est conçu pour simplifier le pilotage des propriétés pour les bailleurs et gestionnaires.',
      techStack: ['Développement web', 'Dashboard', 'Gestion de données'],
      image: '/images/landlify.png',
      links: {
        demo: 'https://landlify.vercel.app/'
      },
      category: 'personal',
      dateCreated: '2024-08-01'
    }
  ],
  en: [
    {
      title: 'SaaS Landing Page Template',
      description: 'A high-performance landing page template optimized for conversion, built with Nuxt 3 and TailwindCSS. Designed for SaaS companies, it provides a modular architecture, an SEO-friendly structure and smooth Swiper.js animations. Fully typed with TypeScript to keep maintenance straightforward.',
      techStack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Swiper.js', 'SEO'],
      image: '/images/landing.png',
      links: {
        demo: 'https://template-landing-saas.vercel.app/'
      },
      category: 'personal',
      dateCreated: '2024-01-15'
    },
    {
      title: 'Dupont Plomberie - Artisan Website',
      description: 'A professional showcase website for a plumbing and heating company in La Rochelle. It includes a modern responsive design, service highlights, a portfolio gallery and contact forms. The project was designed around conversion and user experience.',
      techStack: ['Web development', 'Responsive design', 'SEO'],
      image: '/images/artisan.png',
      links: {
        demo: 'https://artisan.maximedev.fr/'
      },
      category: 'professional',
      dateCreated: '2024-03-01'
    },
    {
      title: 'Claire Martin Coaching',
      description: 'A professional coaching website presenting personal and career development services. It includes service pages, testimonials and contact forms. The design focuses on trust and client engagement.',
      techStack: ['Web development', 'Responsive design', 'UX/UI'],
      image: '/images/coach.png',
      links: {
        demo: 'https://coach.maximedev.fr/'
      },
      category: 'professional',
      dateCreated: '2024-05-01'
    },
    {
      title: 'I Wish There Was',
      description: 'A web application project with innovative features and a modern interface. Built with a recent stack to deliver a premium user experience.',
      techStack: ['Web development', 'Modern stack'],
      image: '/images/i-wish-there-was.png',
      links: {
        demo: 'https://i-wish-there-was.com/'
      },
      category: 'personal',
      dateCreated: '2024-06-01'
    },
    {
      title: 'Landlify - Real Estate Management',
      description: 'A complete real estate management platform. It includes property management, document organization and analytics dashboards. The product is designed to simplify property operations for landlords and managers.',
      techStack: ['Web development', 'Dashboard', 'Data management'],
      image: '/images/landlify.png',
      links: {
        demo: 'https://landlify.vercel.app/'
      },
      category: 'personal',
      dateCreated: '2024-08-01'
    }
  ]
} satisfies Record<LocaleCode, Project[]>

export const projects = projectsByLocale.fr

export function getProjects(locale: string): Project[] {
  return projectsByLocale[normalizeLocale(locale)]
}

export function getProjectCategoryLabel(category: ProjectCategory, locale: string): string {
  return projectCategoryLabels[normalizeLocale(locale)][category]
}
