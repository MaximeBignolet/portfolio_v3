export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate-on-scroll', {
    mounted(el) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('animate-in')
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
