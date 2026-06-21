import { normalizeLocale, type LocaleCode } from './i18n'

export type SkillCategory = 'frontend' | 'tools' | 'backend'

export interface Skill {
  name: string
  category: SkillCategory
  level?: number // 1-5
}

export const skillCategories: SkillCategory[] = ['frontend', 'tools', 'backend']

export const skillCategoryLabels = {
  fr: {
    frontend: 'Développement Frontend',
    tools: 'Outils de développement',
    backend: 'Backend & Architecture'
  },
  en: {
    frontend: 'Frontend Development',
    tools: 'Development Tools',
    backend: 'Backend & Architecture'
  }
} satisfies Record<LocaleCode, Record<SkillCategory, string>>

export const skillsByLocale = {
  fr: [
    // Développement Frontend
    { name: 'Nuxt.js (3 & 4)', category: 'frontend', level: 5 },
    { name: 'Vue.js (3, Composition API)', category: 'frontend', level: 5 },
    { name: 'TypeScript', category: 'frontend', level: 4 },
    { name: 'TailwindCSS', category: 'frontend', level: 5 },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 4 },
    { name: 'HTML5 / Web sémantique', category: 'frontend', level: 5 },
    { name: 'CSS3 / SCSS', category: 'frontend', level: 5 },
    { name: 'Pinia / Gestion d\'état', category: 'frontend', level: 4 },
    { name: 'React.js', category: 'frontend', level: 3 },

    // Outils de développement
    { name: 'Git / GitHub', category: 'tools', level: 4 },
    { name: 'Vite / Webpack', category: 'tools', level: 4 },
    { name: 'VS Code', category: 'tools', level: 5 },
    { name: 'Figma (Passation dev)', category: 'tools', level: 3 },
    { name: 'Jest / Vitest', category: 'tools', level: 3 },

    // Backend & Architecture
    { name: 'Bases Node.js', category: 'backend', level: 2 },
    { name: 'REST APIs', category: 'backend', level: 4 },
    { name: 'Headless CMS', category: 'backend', level: 3 },
    { name: 'SEO & Web Vitals', category: 'backend', level: 4 },
    { name: 'WordPress / PHP', category: 'backend', level: 3 }
  ],
  en: [
    { name: 'Nuxt.js (3 & 4)', category: 'frontend', level: 5 },
    { name: 'Vue.js (3, Composition API)', category: 'frontend', level: 5 },
    { name: 'TypeScript', category: 'frontend', level: 4 },
    { name: 'TailwindCSS', category: 'frontend', level: 5 },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 4 },
    { name: 'HTML5 / Semantic web', category: 'frontend', level: 5 },
    { name: 'CSS3 / SCSS', category: 'frontend', level: 5 },
    { name: 'Pinia / State management', category: 'frontend', level: 4 },
    { name: 'React.js', category: 'frontend', level: 3 },

    { name: 'Git / GitHub', category: 'tools', level: 4 },
    { name: 'Vite / Webpack', category: 'tools', level: 4 },
    { name: 'VS Code', category: 'tools', level: 5 },
    { name: 'Figma (Developer handoff)', category: 'tools', level: 3 },
    { name: 'Jest / Vitest', category: 'tools', level: 3 },

    { name: 'Node.js fundamentals', category: 'backend', level: 2 },
    { name: 'REST APIs', category: 'backend', level: 4 },
    { name: 'Headless CMS', category: 'backend', level: 3 },
    { name: 'SEO & Web Vitals', category: 'backend', level: 4 },
    { name: 'WordPress / PHP', category: 'backend', level: 3 }
  ]
} satisfies Record<LocaleCode, Skill[]>

export const skills = skillsByLocale.fr

export function getSkills(locale: string): Skill[] {
  return skillsByLocale[normalizeLocale(locale)]
}

export function getSkillCategoryLabel(category: SkillCategory, locale: string): string {
  return skillCategoryLabels[normalizeLocale(locale)][category]
}
