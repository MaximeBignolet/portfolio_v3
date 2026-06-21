import { personalInfo as defaultPersonalInfo, links, type PersonalInfo } from '~/data/links'
import { skills as defaultSkills, type Skill } from '~/data/skills'
import type { Project } from '~/data/projects'

export interface SchemaContext {
  personalInfo?: PersonalInfo
  skills?: Skill[]
  locale?: string
}

export interface BreadcrumbItem {
  name: string
  item: string
}

export type SchemaObject = Record<string, unknown>

export function generatePersonSchema(context: SchemaContext = {}): SchemaObject {
  const personalInfo = context.personalInfo || defaultPersonalInfo
  const skills = context.skills || defaultSkills
  const sameAs = [
    links.github,
    links.linkedin,
    links.malt
  ]

  if (links.twitter) {
    sameAs.push(links.twitter)
  }

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
    sameAs,
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

export function generateWebsiteSchema(context: SchemaContext = {}): SchemaObject {
  const personalInfo = context.personalInfo || defaultPersonalInfo
  const locale = context.locale === 'en' ? 'en-US' : 'fr-FR'

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://maximedev.fr/#website',
    name: `${personalInfo.name} - ${personalInfo.title}`,
    url: 'https://maximedev.fr',
    description: personalInfo.shortBio,
    publisher: {
      '@id': 'https://maximedev.fr/#person'
    },
    inLanguage: locale
  }
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): SchemaObject {
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

export function generateProjectSchema(project: Project): SchemaObject {
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
    dateCreated: project.dateCreated
  }
}

export function generateCollectionPageSchema(title: string, description: string): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: description,
    url: 'https://maximedev.fr/projects',
    author: {
      '@type': 'Person',
      name: defaultPersonalInfo.name
    }
  }
}
