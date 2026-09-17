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
      title: 'Développeur frontend Nuxt',
      company: 'Rhinos Solutions, agence digitale',
      dates: '2024 → aujourd\'hui',
      description: 'Implémentation technique d\'applications web à fort trafic pour des grands comptes. Design system Tailwind, Core Web Vitals, intégration d\'API REST et contributions côté NestJS, accompagnement des profils juniors.',
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
      title: 'Bachelor développeur JavaScript / React',
      company: 'OpenClassrooms',
      dates: '2023 → 2024',
      description: 'SPA avec React et Redux, responsive multi-navigateurs, méthodes agiles, tests unitaires et d\'intégration.',
      bullets: [
        'Développement de Single Page Applications (SPA) dynamiques avec React.js et Redux.',
        'Implémentation de designs responsives et compatibilité multi-navigateurs.',
        'Mise en pratique des méthodologies Agile (Scrum/Kanban) en contexte professionnel.',
        'Réalisation de tests unitaires et d\'intégration pour garantir la stabilité applicative.'
      ],
      type: 'Alternance'
    },
    {
      title: 'Diplôme développeur web',
      company: 'OpenClassrooms',
      dates: '2022 → 2023',
      description: 'Fondamentaux : HTML sémantique, CSS, JavaScript et DOM, Git, optimisation des assets.',
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
      title: 'Nuxt frontend developer',
      company: 'Rhinos Solutions, digital agency',
      dates: '2024 → today',
      description: 'Technical implementation of high-traffic web applications for large accounts. Tailwind design system, Core Web Vitals, REST API integration and NestJS contributions, mentoring junior developers.',
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
      title: 'Bachelor JavaScript / React developer',
      company: 'OpenClassrooms',
      dates: '2023 → 2024',
      description: 'SPAs with React and Redux, cross-browser responsive work, agile methods, unit and integration tests.',
      bullets: [
        'Development of dynamic Single Page Applications with React.js and Redux.',
        'Implementation of responsive designs with cross-browser compatibility.',
        'Practical use of Agile methodologies (Scrum/Kanban) in a professional context.',
        'Creation of unit and integration tests to improve application stability.'
      ],
      type: 'Alternance'
    },
    {
      title: 'Web developer diploma',
      company: 'OpenClassrooms',
      dates: '2022 → 2023',
      description: 'Fundamentals: semantic HTML, CSS, JavaScript and the DOM, Git, asset optimisation.',
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
