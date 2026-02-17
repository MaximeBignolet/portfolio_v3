export interface Experience {
  title: string
  company: string
  dates: string
  description: string
  bullets: string[]
  type: 'CDI' | 'Alternance' | 'Formation'
}

export const experience: Experience[] = [
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
]
