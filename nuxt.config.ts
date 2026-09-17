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
    '@nuxt/eslint',
    '@nuxtjs/i18n'
  ],
  i18n: {
    baseUrl: 'https://maximedev.fr',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'fr',
        name: 'Français',
        language: 'fr-FR',
        file: 'fr.json'
      },
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
        file: 'en.json'
      }
    ]
  },
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
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
        { name: 'theme-color', content: '#101c26' },
        { name: 'msapplication-TileColor', content: '#101c26' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'preload', href: '/fonts/bricolage-grotesque-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/ibm-plex-sans-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }
      ],
      script: [
        {
          innerHTML: "(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})()",
          tagPosition: 'head'
        }
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
    name: 'Maxime Bignolet',
    description: 'Portfolio de Maxime Bignolet, développeur frontend spécialisé en Nuxt.js et TypeScript',
    image: 'https://maximedev.fr/images/avatar.png',
    github: 'https://github.com/MaximeBignolet',
    linkedin: 'https://www.linkedin.com/in/maxime-bignolet/',
    email: 'portfolio.form.contact@gmail.com',
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
      routes: ['/', '/en', '/resume', '/en/resume'],
      ignore: ['/en/sitemap.xml']
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
      '/en': {
        prerender: true,
        headers: {
          'Cache-Control': 'public, max-age=3600, must-revalidate'
        }
      },
      '/en/resume': {
        prerender: true,
        headers: {
          'Cache-Control': 'public, max-age=3600, must-revalidate'
        }
      },
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=3600, must-revalidate',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
        }
      },
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
        }
      }
    }
  }
})
