import { personalInfo, links } from '~/data/links'
import { skills } from '~/data/skills'

export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://maximedev.fr/#person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: 'https://maximedev.fr',
    image: 'https://maximedev.fr/images/me.pdp.png',
    email: links.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location.split(',')[0],
      addressCountry: 'FR'
    },
    sameAs: [
      links.github,
      links.linkedin,
      ...(links.twitter ? [links.twitter] : [])
    ].filter(Boolean),
    worksFor: {
      '@type': 'Organization',
      name: 'Rhinos Solutions'
    },
    description: personalInfo.shortBio,
    knowsAbout: skills.map(skill => skill.name),
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'OpenClassrooms'
    }
  }
}

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://maximedev.fr/#website',
    name: 'Maxime Bignolet - Frontend Developer',
    url: 'https://maximedev.fr',
    description: personalInfo.shortBio,
    publisher: {
      '@id': 'https://maximedev.fr/#person'
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://maximedev.fr/?q={search_term_string}'
      },
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateProjectSchema = (project: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    programmingLanguage: project.techStack,
    codeRepository: project.links.github,
    url: project.links.demo,
    author: {
      '@id': 'https://maximedev.fr/#person'
    },
    license: 'https://opensource.org/licenses/MIT',
    dateCreated: new Date().toISOString()
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
