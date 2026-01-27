// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxt/eslint'
  ],
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s | Maxime Bignolet',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { charset: 'utf-8' },
        { name: 'author', content: 'Maxime Bignolet' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Maxime Bignolet' },
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'msapplication-TileColor', content: '#3b82f6' },
        { property: 'og:site_name', content: 'Maxime Bignolet - Frontend Developer' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@MaximeBignolet' },
        { name: 'twitter:creator', content: '@MaximeBignolet' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'Maxime Bignolet RSS Feed', href: '/rss.xml' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // SEO & Performance
  image: {
    quality: 85,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 200,
          height: 200
        }
      },
      cover: {
        modifiers: {
          format: 'webp',
          width: 1200,
          height: 630
        }
      }
    }
  },
  // Sitemap configuration
  site: {
    url: 'https://maximedev.fr',
    name: 'Maxime Bignolet - Frontend Developer',
    description: 'Portfolio of Maxime Bignolet, Frontend Developer specialized in Nuxt.js and TypeScript',
    image: 'https://maximedev.fr/images/me.pdp.png',
    twitter: '@max_devfront',
    github: 'https://github.com/MaximeBignolet',
    linkedin: 'https://www.linkedin.com/in/maxime-bignolet/',
    email: 'portfolio.form.contact@gmail.com',
    rss: {
      filename: 'rss.xml',
      path: '/rss.xml',
      format: 'rss2',
      limit: 20,
      ttl: 60,
    },
  },
  sitemap: {
    urls: async () => {
      const { projects } = await import('./data/projects')
      return [
        '/',
        '/resume',
        ...projects.map((project, index) => `/projects/${index}`)
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },
  devServer: {
    host: '0.0.0.0',
  },
  // Performance optimizations
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true
    },
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    routeRules: {
      '/': { 
        prerender: true,
        headers: { 
          'Cache-Control': 'public, max-age=3600, must-revalidate' 
        }
      },
      '/resume': { 
        prerender: true,
        headers: { 
          'Cache-Control': 'public, max-age=3600, must-revalidate' 
        }
      },
      '/**': { 
        headers: { 
          'Cache-Control': 'public, max-age=31536000, immutable' 
        }
      }
    }
  }
})
