export interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  links: {
    demo?: string
    github?: string
  }
  category: 'Professional' | 'Open-source' | 'Side Project'
}

export const projects: Project[] = [
  {
    title: 'SaaS Landing Page Template',
    description: 'A high-performance, conversion-optimized landing page template built with Nuxt 3 and TailwindCSS. Designed for SaaS companies, it features a modular component architecture, SEO-friendly structure, and smooth animations using Swiper.js. Fully typed with TypeScript for maintainability.',
    techStack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Swiper.js', 'SEO'],
    image: '/images/projects/landing.jpg', 
    links: {
      demo: 'https://template-landing-saas.vercel.app/',
      github: 'https://github.com/MaximeBignolet/template-landing-saas'
    },
    category: 'Side Project'
  },
  {
    title: 'Kasa - Real Estate Platform',
    description: 'A modern real estate rental application built with React.js. Features include dynamic routing with React Router, a responsive layout using Sass, and a clean, user-centric interface. Demonstrates proficiency in component-based architecture and state management.',
    techStack: ['React.js', 'Sass', 'React Router', 'JavaScript'],
    image: '/images/projects/kasa.jpg', 
    links: {
      github: 'https://github.com/MaximeBignolet/Kasa'
    },
    category: 'Side Project'
  },
  {
    title: 'Movie Discovery App',
    description: 'An interactive movie discovery application consuming the TMDB API. Users can browse popular movies, search for titles, and view detailed metadata. Built with Vue.js to demonstrate API integration and asynchronous data handling.',
    techStack: ['Vue.js', 'REST API', 'CSS3', 'JavaScript'],
    image: '/images/projects/movie-app.jpg', 
    links: {
      github: 'https://github.com/MaximeBignolet/Movie-App'
    },
    category: 'Side Project'
  },
  {
    title: 'Booki - Travel Agency',
    description: 'A responsive travel agency homepage built from a Figma mockup. Focuses on semantic HTML5, CSS3 Flexbox, and media queries for a pixel-perfect mobile-first implementation. Ensures high accessibility standards.',
    techStack: ['HTML5', 'CSS3', 'Responsive Design'],
    image: '/images/projects/booki.jpg', 
    links: {
      github: 'https://github.com/MaximeBignolet/Booki'
    },
    category: 'Side Project'
  }
]
