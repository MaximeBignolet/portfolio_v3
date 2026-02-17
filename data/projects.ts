export interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  links: {
    demo?: string
    github?: string
  }
  category: 'Professionnel' | 'Open source' | 'Projet perso'
  dateCreated: string
}

export const projects: Project[] = [
  {
    title: 'SaaS Landing Page Template',
    description: 'Template de landing page performant et optimisé pour la conversion, construit avec Nuxt 3 et TailwindCSS. Conçu pour les entreprises SaaS, il propose une architecture modulaire, une structure SEO-friendly et des animations fluides avec Swiper.js. Entièrement typé en TypeScript pour faciliter la maintenabilité.',
    techStack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Swiper.js', 'SEO'],
    image: '/images/landing.png', 
    links: {
      demo: 'https://template-landing-saas.vercel.app/',
      github: 'https://github.com/MaximeBignolet/template-landing-saas'
    },
    category: 'Projet perso',
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
    category: 'Professionnel',
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
    category: 'Professionnel',
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
    category: 'Projet perso',
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
    category: 'Projet perso',
    dateCreated: '2024-08-01'
  },
]
