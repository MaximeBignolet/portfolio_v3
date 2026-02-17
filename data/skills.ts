export interface Skill {
  name: string
  category: 'Développement Frontend' | 'Outils de développement' | 'Backend & Architecture'
  level?: number // 1-5
}

export const skills: Skill[] = [
  // Développement Frontend
  { name: 'Nuxt.js (3 & 4)', category: 'Développement Frontend', level: 5 },
  { name: 'Vue.js (3, Composition API)', category: 'Développement Frontend', level: 5 },
  { name: 'TypeScript', category: 'Développement Frontend', level: 4 },
  { name: 'TailwindCSS', category: 'Développement Frontend', level: 5 },
  { name: 'JavaScript (ES6+)', category: 'Développement Frontend', level: 4 },
  { name: 'HTML5 / Web sémantique', category: 'Développement Frontend', level: 5 },
  { name: 'CSS3 / SCSS', category: 'Développement Frontend', level: 5 },
  { name: 'Pinia / Gestion d\'état', category: 'Développement Frontend', level: 4 },
  { name: 'React.js', category: 'Développement Frontend', level: 3 },
  
  // Outils de développement
  { name: 'Git / GitHub', category: 'Outils de développement', level: 4 },
  { name: 'Vite / Webpack', category: 'Outils de développement', level: 4 },
  { name: 'VS Code', category: 'Outils de développement', level: 5 },
  { name: 'Figma (Passation dev)', category: 'Outils de développement', level: 3 },
  { name: 'Jest / Vitest', category: 'Outils de développement', level: 3 },
  
  // Backend & Architecture
  { name: 'Bases Node.js', category: 'Backend & Architecture', level: 2 },
  { name: 'REST APIs', category: 'Backend & Architecture', level: 4 },
  { name: 'Headless CMS', category: 'Backend & Architecture', level: 3 },
  { name: 'SEO & Web Vitals', category: 'Backend & Architecture', level: 4 },
  { name: 'WordPress / PHP', category: 'Backend & Architecture', level: 3 }
]
