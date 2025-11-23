import { personalInfo, links } from '~/data/links'
import { skills } from '~/data/skills'

export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: 'https://maximedev.fr',
    image: 'https://maximedev.fr/images/avatar.jpg',
    sameAs: [
      links.github,
      links.linkedin,
      links.repo
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Rhinos Solutions'
    },
    description: personalInfo.shortBio,
    knowsAbout: skills.map(skill => skill.name)
  }
}

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Maxime Bignolet - Nuxt.js Developer',
    url: 'https://maximedev.fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://maximedev.fr/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
}

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://maximedev.fr${item.item}`
    }))
  }
}

export const generateProjectSchema = (project: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    programmingLanguage: project.techStack,
    codeRepository: project.links.github,
    author: {
      '@type': 'Person',
      name: personalInfo.name
    }
  }
}

export const generateCollectionPageSchema = (title: string, description: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: description,
    url: 'https://maximedev.fr/projects',
    author: {
      '@type': 'Person',
      name: personalInfo.name
    }
  }
}
