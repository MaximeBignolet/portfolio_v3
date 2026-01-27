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
    image: '/images/landing.png', 
    links: {
      demo: 'https://template-landing-saas.vercel.app/',
      github: 'https://github.com/MaximeBignolet/template-landing-saas'
    },
    category: 'Side Project'
  },
  {
    title: 'Dupont Plomberie - Artisan Website',
    description: 'A professional website for a plumbing and heating services company in La Rochelle. Features a modern, responsive design with service showcases, project galleries, and contact forms. Built with a focus on conversion optimization and user experience.',
    techStack: ['Web Development', 'Responsive Design', 'SEO'],
    image: '/images/artisan.png', 
    links: {
      demo: 'https://artisan.maximedev.fr/'
    },
    category: 'Professional'
  },
  {
    title: 'Claire Martin Coaching',
    description: 'A professional coaching website showcasing services for professional and personal development. Features include service presentations, testimonials, and contact forms. Designed with a focus on trust-building and client engagement.',
    techStack: ['Web Development', 'Responsive Design', 'UX/UI'],
    image: '/images/coach.png', 
    links: {
      demo: 'https://coach.maximedev.fr/'
    },
    category: 'Professional'
  },
  {
    title: 'I Wish There Was',
    description: 'A web application project featuring innovative features and modern design. Built with cutting-edge technologies to deliver an exceptional user experience.',
    techStack: ['Web Development', 'Modern Stack'],
    image: '/images/i-wish-there-was.png', 
    links: {
      demo: 'https://i-wish-there-was.com/'
    },
    category: 'Side Project'
  },
  {
    title: 'Landlify - Real Estate Management',
    description: 'A comprehensive platform for managing real estate properties. Features include property management, document organization, and dashboard analytics. Designed to simplify property management for landlords and property owners.',
    techStack: ['Web Development', 'Dashboard', 'Data Management'],
    image: '/images/landlify.png', 
    links: {
      demo: 'https://landlify.vercel.app/'
    },
    category: 'Side Project'
  },
]
