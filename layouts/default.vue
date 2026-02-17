<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDark = ref(false)

// Initialize dark mode from localStorage or system preference
onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}

watch(y, (newY) => {
  isScrolled.value = newY > 50
})

const navigation = [
  { name: 'À propos', href: '/#about' },
  { name: 'Compétences', href: '/#skills' },
  { name: 'Expérience', href: '/#experience' },
  { name: 'Projets', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
  { name: 'CV', href: '/resume' },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="[
        isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-6'
      ]"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold tracking-tighter hover:text-primary-500 transition-colors">
          MB
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
          
          <button
            class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            aria-label="Basculer le thème"
            @click="toggleTheme"
          >
            <Icon v-if="isDark" name="ph:sun-bold" class="w-5 h-5" />
            <Icon v-else name="ph:moon-bold" class="w-5 h-5" />
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-4 md:hidden">
          <button
            class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            @click="toggleTheme"
          >
            <Icon v-if="isDark" name="ph:sun-bold" class="w-5 h-5" />
            <Icon v-else name="ph:moon-bold" class="w-5 h-5" />
          </button>
          
          <button
            class="p-2 -mr-2 text-slate-600 dark:text-slate-300"
            aria-label="Menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <Icon v-if="isMobileMenuOpen" name="ph:x-bold" class="w-6 h-6" />
            <Icon v-else name="ph:list-bold" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Nav -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-100 dark:border-slate-800 p-4 shadow-lg max-h-[70vh] overflow-y-auto"
      >
        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-3 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main id="main-content" class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <p class="font-bold text-lg mb-2">Maxime Bignolet</p>
          <p class="text-slate-500 dark:text-slate-400 text-sm">
            © {{ new Date().getFullYear() }} Tous droits réservés.
          </p>
        </div>
        
        <div class="flex items-center gap-6">
          <a href="https://github.com/MaximeBignolet" target="_blank" rel="noopener" aria-label="GitHub" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Icon name="ph:github-logo-bold" class="w-6 h-6" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/maxime-bignolet/" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Icon name="ph:linkedin-logo-bold" class="w-6 h-6" aria-hidden="true" />
          </a>
          <a href="https://www.malt.fr/profile/maximebignoletnuxtfrontend" target="_blank" rel="noopener" aria-label="Malt" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Icon name="ph:briefcase-bold" class="w-6 h-6" aria-hidden="true" />
          </a>
          <a href="mailto:portfolio.form.contact@gmail.com" aria-label="Email" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Icon name="ph:envelope-simple-bold" class="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
