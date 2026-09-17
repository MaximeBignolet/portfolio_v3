<script setup lang="ts">
const { locale, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const isDark = ref(false)
const isMenuOpen = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme(): void {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  try {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  } catch {
    // storage unavailable: the theme still applies for this page view
  }
}

function closeMenu(): void {
  isMenuOpen.value = false
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') closeMenu()
}

watch(() => route.fullPath, closeMenu)
watch(isMenuOpen, (open) => {
  if (open) document.addEventListener('keydown', onKeydown)
  else document.removeEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))

function sectionPath(hash: string): string {
  return `${localePath('index')}${hash}`
}

const navigation = computed(() => [
  { name: t('navigation.projects'), href: sectionPath('#projets') },
  { name: t('navigation.expertise'), href: sectionPath('#expertise') },
  { name: t('navigation.experience'), href: sectionPath('#parcours') },
  { name: t('navigation.contact'), href: sectionPath('#contact') },
  { name: t('navigation.resume'), href: localePath('resume') }
])

const targetLocale = computed(() => (locale.value === 'fr' ? 'en' : 'fr'))
const targetLocalePath = computed(() => switchLocalePath(targetLocale.value) || localePath('index'))

const chipClass = 'rounded-full border border-line-strong px-2.5 py-1.5 font-mono text-xs text-ink transition-colors hover:border-ink'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
    >
      {{ t('navigation.skipToContent') }}
    </a>

    <header class="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-md">
      <div class="wrap flex h-14 items-center justify-between gap-4 md:h-16">
        <NuxtLink :to="localePath('index')" class="flex items-center gap-3 whitespace-nowrap font-display text-[17px] font-bold" @click="closeMenu">
          <UiLogo class="h-[22px] w-auto" />
          Maxime Bignolet
        </NuxtLink>

        <nav class="hidden md:block" aria-label="Principale">
          <ul class="flex gap-7">
            <li v-for="item in navigation" :key="item.href">
              <NuxtLink :to="item.href" class="text-[15px] text-ink-2 transition-colors hover:text-ink">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="hidden items-center gap-2 md:flex">
          <NuxtLink :to="targetLocalePath" :class="chipClass" :aria-label="t('navigation.switchLanguage')">
            {{ t('navigation.targetLanguage') }}
          </NuxtLink>
          <button type="button" :class="chipClass" :aria-label="t('navigation.theme')" @click="toggleTheme">
            {{ isDark ? t('navigation.themeLight') : t('navigation.themeDark') }}
          </button>
        </div>

        <button
          type="button"
          class="-mr-2 flex h-10 w-10 items-center justify-center rounded text-ink md:hidden"
          :aria-label="isMenuOpen ? t('navigation.closeMenu') : t('navigation.menu')"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'ph:x-bold' : 'ph:list-bold'" class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        class="border-t border-line bg-bg md:hidden"
        :class="isMenuOpen ? 'block' : 'hidden'"
        aria-label="Principale"
      >
        <ul class="wrap grid pt-2">
          <li v-for="item in navigation" :key="item.href">
            <NuxtLink
              :to="item.href"
              class="flex items-center justify-between border-b border-line py-3.5 font-display text-lg font-semibold text-ink"
              @click="closeMenu"
            >
              {{ item.name }}
              <Icon name="ph:arrow-right-bold" class="h-4 w-4 text-muted" aria-hidden="true" />
            </NuxtLink>
          </li>
        </ul>
        <div class="wrap flex items-center gap-2 py-4">
          <NuxtLink :to="targetLocalePath" :class="chipClass" :aria-label="t('navigation.switchLanguage')" @click="closeMenu">
            {{ t('navigation.targetLanguage') }}
          </NuxtLink>
          <button type="button" :class="chipClass" :aria-label="t('navigation.theme')" @click="toggleTheme">
            {{ isDark ? t('navigation.themeLight') : t('navigation.themeDark') }}
          </button>
        </div>
      </nav>
    </header>

    <main id="main-content" class="flex-grow">
      <slot />
    </main>

    <footer>
      <div class="wrap flex flex-wrap justify-between gap-x-4 gap-y-2 py-5 font-mono text-xs text-muted">
        <span>© {{ new Date().getFullYear() }} Maxime Bignolet · {{ t('layout.copyright') }}</span>
        <span>{{ t('layout.builtWith') }}</span>
      </div>
    </footer>
  </div>
</template>
