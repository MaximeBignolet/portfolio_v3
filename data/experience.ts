export interface Experience {
  title: string
  company: string
  dates: string
  description: string
  bullets: string[]
  type: 'Full-time' | 'Apprenticeship' | 'Education'
}

export const experience: Experience[] = [
  {
    title: 'Frontend Developer (Nuxt 3 / TypeScript)',
    company: 'Rhinos Solutions',
    dates: '2024 | Present',
    description: 'Full-time Frontend Developer driving the technical implementation of high-traffic web applications.',
    bullets: [
      'Architected and developed scalable **Nuxt 3 applications** using **TypeScript** and **Composition API**.',
      'Implemented a robust **Design System** with **TailwindCSS**, ensuring consistency and reducing development time by 30%.',
      'Optimized **Core Web Vitals** (LCP, CLS) resulting in a 90+ Lighthouse performance score.',
      'Collaborated with backend teams to integrate complex **REST APIs** and ensure type safety.',
      'Mentored junior developers on **Vue.js best practices** and clean code principles.'
    ],
    type: 'Full-time'
  },
  {
    title: 'Bachelor’s Degree - JavaScript / React.js Developer',
    company: 'OpenClassrooms',
    dates: '2023 | 2024',
    description: 'Intensive apprenticeship program focusing on modern JavaScript ecosystems and SPA development.',
    bullets: [
      'Developed dynamic Single Page Applications (SPAs) using **React.js** and **Redux**.',
      'Implemented **responsive designs** and ensured cross-browser compatibility.',
      'Mastered **Agile methodologies** (Scrum/Kanban) in a professional environment.',
      'Conducted unit and integration testing to ensure application stability.'
    ],
    type: 'Education'
  },
  {
    title: 'Associate Degree - Web Developer Diploma',
    company: 'OpenClassrooms',
    dates: '2022 | 2023',
    description: 'Foundational training in full-stack web development standards.',
    bullets: [
      'Built semantic and accessible websites using **HTML5** and **CSS3**.',
      'Gained proficiency in **JavaScript** fundamentals and DOM manipulation.',
      'Collaborated on projects using **Git** and **GitHub** for version control.',
      'Optimized assets and code for faster page load times.'
    ],
    type: 'Education'
  }
]
