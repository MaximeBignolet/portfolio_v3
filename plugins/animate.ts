export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate-on-scroll', {
    // SSR: No-op during server-side rendering
    getSSRProps() {
      return {}
    },
    // Client-side: Add animation on mount
    mounted(el) {
      // Only run on client side (check for window object)
      if (typeof window === 'undefined') return
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('animate-in')
              el.classList.remove('opacity-0', 'translate-y-8')
              observer.unobserve(el)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      )
      observer.observe(el)
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
    },
  })
})
