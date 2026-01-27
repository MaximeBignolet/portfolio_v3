import { personalInfo } from '~/data/links'

const siteUrl = 'https://maximedev.fr'
const siteName = 'Maxime Bignolet - Frontend Developer'
const defaultImage = `${siteUrl}/images/me.pdp.png`
const twitterHandle = '@MaximeBignolet'

export interface SeoOptions {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  noindex?: boolean
  nofollow?: boolean
}

export const useSeo = (options: SeoOptions = {}) => {
  const route = useRoute()
  
  const title = options.title || `${personalInfo.name} | ${personalInfo.title}`
  const description = options.description || personalInfo.shortBio
  const image = options.image || defaultImage
  const url = options.url || `${siteUrl}${route.path}`
  const type = options.type || 'website'
  
  // Canonical URL
  const canonical = url.replace(/\/$/, '') // Remove trailing slash
  
  // Meta tags
  const meta = [
    // Basic
    { name: 'description', content: description },
    { name: 'author', content: personalInfo.name },
    { name: 'robots', content: `${options.noindex ? 'noindex' : 'index'}, ${options.nofollow ? 'nofollow' : 'follow'}` },
    
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    ...(twitterHandle ? [{ name: 'twitter:creator', content: twitterHandle }] : []),
    
    // Additional
    { name: 'theme-color', content: '#3b82f6' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
  ]
  
  // Links
  const link = [
    { rel: 'canonical', href: canonical },
    { rel: 'alternate', type: 'application/rss+xml', title: `${siteName} RSS`, href: `${siteUrl}/rss.xml` }
  ]
  
  return {
    title,
    meta,
    link,
    script: []
  }
}
