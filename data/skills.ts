export interface Skill {
  name: string
  category: 'Frontend Development' | 'Development Tools' | 'Backend & Architecture'
  level?: number // 1-5
}

export const skills: Skill[] = [
  // Frontend Development
  { name: 'Nuxt.js (3 & 4)', category: 'Frontend Development', level: 5 },
  { name: 'Vue.js (3, Composition API)', category: 'Frontend Development', level: 5 },
  { name: 'TypeScript', category: 'Frontend Development', level: 4 },
  { name: 'TailwindCSS', category: 'Frontend Development', level: 5 },
  { name: 'JavaScript (ES6+)', category: 'Frontend Development', level: 4 },
  { name: 'HTML5 / Semantic Web', category: 'Frontend Development', level: 5 },
  { name: 'CSS3 / SCSS', category: 'Frontend Development', level: 5 },
  { name: 'Pinia / State Management', category: 'Frontend Development', level: 4 },
  { name: 'React.js', category: 'Frontend Development', level: 3 },
  
  // Development Tools
  { name: 'Git / GitHub', category: 'Development Tools', level: 4 },
  { name: 'Vite / Webpack', category: 'Development Tools', level: 4 },
  { name: 'VS Code', category: 'Development Tools', level: 5 },
  { name: 'Figma (Developer Handoff)', category: 'Development Tools', level: 3 },
  { name: 'Jest / Vitest', category: 'Development Tools', level: 3 },
  
  // Backend & Architecture
  { name: 'Node.js Basics', category: 'Backend & Architecture', level: 2 },
  { name: 'REST APIs', category: 'Backend & Architecture', level: 4 },
  { name: 'Headless CMS', category: 'Backend & Architecture', level: 3 },
  { name: 'SEO & Web Vitals', category: 'Backend & Architecture', level: 4 },
  { name: 'WordPress / PHP', category: 'Backend & Architecture', level: 3 }
]
