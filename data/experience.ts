import { normalizeLocale, type LocaleCode } from './i18n'

export interface Experience {
  title: string
  company: string
  dates: string
  description: string
  bullets: string[]
  type: 'CDI' | 'Alternance' | 'Formation'
}

export const experienceByLocale = {
  fr: [
    {
      title: 'Développeur Frontend (Nuxt 3 / TypeScript)',
      company: 'Rhinos Solutions',
      dates: '2024 | Aujourd\'hui',
      description: 'Développeur frontend en CDI, en charge de l\'implémentation technique d\'applications web à fort trafic.',
      bullets: [
        'Architecture et développement d\'applications Nuxt 3 scalables avec TypeScript et Composition API.',
        'Mise en place d\'un Design System robuste avec TailwindCSS, garantissant la cohérence et réduisant le temps de développement de 30 %.',
        'Optimisation des Core Web Vitals (LCP, CLS) pour atteindre un score Lighthouse de 90+.',
        'Collaboration avec les équipes backend pour intégrer des API REST complexes et garantir la sûreté des types.',
        'Accompagnement des profils juniors sur les bonnes pratiques Vue.js et les principes de clean code.'
      ],
      type: 'CDI'
    },
    {
      title: 'Bachelor Développeur JavaScript / React.js',
      company: 'OpenClassrooms',
      dates: '2023 | 2024',
      description: 'Formation intensive en alternance, orientée écosystèmes JavaScript modernes et développement de SPA.',
      bullets: [
        'Développement de Single Page Applications (SPA) dynamiques avec React.js et Redux.',
        'Implémentation de designs responsives et compatibilité multi-navigateurs.',
        'Mise en pratique des méthodologies Agile (Scrum/Kanban) en contexte professionnel.',
        'Réalisation de tests unitaires et d\'intégration pour garantir la stabilité applicative.'
      ],
      type: 'Formation'
    },
    {
      title: 'Diplôme Développeur Web',
      company: 'OpenClassrooms',
      dates: '2022 | 2023',
      description: 'Formation fondatrice aux standards du développement web full-stack.',
      bullets: [
        'Création de sites sémantiques et accessibles en HTML5 et CSS3.',
        'Maîtrise des fondamentaux JavaScript et de la manipulation du DOM.',
        'Collaboration sur des projets avec Git et GitHub pour le versioning.',
        'Optimisation des assets et du code pour accélérer les temps de chargement.'
      ],
      type: 'Formation'
    }
  ],
  en: [
    {
      title: 'Frontend Developer (Nuxt 3 / TypeScript)',
      company: 'Rhinos Solutions',
      dates: '2024 | Present',
      description: 'Full-time frontend developer responsible for the technical implementation of high-traffic web applications.',
      bullets: [
        'Architecture and development of scalable Nuxt 3 applications with TypeScript and the Composition API.',
        'Implementation of a robust TailwindCSS design system, improving consistency and reducing development time by 30%.',
        'Core Web Vitals optimization (LCP, CLS) to reach Lighthouse scores above 90.',
        'Collaboration with backend teams to integrate complex REST APIs and preserve type safety.',
        'Mentoring junior developers on Vue.js best practices and clean code principles.'
      ],
      type: 'CDI'
    },
    {
      title: 'Bachelor JavaScript / React.js Developer',
      company: 'OpenClassrooms',
      dates: '2023 | 2024',
      description: 'Intensive work-study program focused on modern JavaScript ecosystems and SPA development.',
      bullets: [
        'Development of dynamic Single Page Applications with React.js and Redux.',
        'Implementation of responsive designs with cross-browser compatibility.',
        'Practical use of Agile methodologies (Scrum/Kanban) in a professional context.',
        'Creation of unit and integration tests to improve application stability.'
      ],
      type: 'Formation'
    },
    {
      title: 'Web Developer Diploma',
      company: 'OpenClassrooms',
      dates: '2022 | 2023',
      description: 'Foundational training in full-stack web development standards.',
      bullets: [
        'Creation of semantic and accessible websites with HTML5 and CSS3.',
        'Mastery of JavaScript fundamentals and DOM manipulation.',
        'Collaboration on projects using Git and GitHub for version control.',
        'Asset and code optimization to improve loading performance.'
      ],
      type: 'Formation'
    }
  ]
} satisfies Record<LocaleCode, Experience[]>

export const experience = experienceByLocale.fr

export function getExperience(locale: string): Experience[] {
  return experienceByLocale[normalizeLocale(locale)]
}
