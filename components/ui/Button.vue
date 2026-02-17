<script setup lang="ts">
defineProps<{
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
}>()

const variantClasses = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30',
  secondary: 'bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white',
  outline: 'border-2 border-slate-200 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:hover:border-primary-400 dark:hover:text-primary-400',
  ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg'
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center text-center rounded-full font-medium transition-all duration-300 active:scale-95"
    :class="[
      variantClasses[variant || 'primary'],
      sizeClasses[size || 'md'],
      block ? 'w-full' : ''
    ]"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center text-center rounded-full font-medium transition-all duration-300 active:scale-95"
    :class="[
      variantClasses[variant || 'primary'],
      sizeClasses[size || 'md'],
      block ? 'w-full' : ''
    ]"
  >
    <slot />
  </a>
  <button
    v-else
    class="inline-flex items-center justify-center text-center rounded-full font-medium transition-all duration-300 active:scale-95"
    :class="[
      variantClasses[variant || 'primary'],
      sizeClasses[size || 'md'],
      block ? 'w-full' : ''
    ]"
  >
    <slot />
  </button>
</template>
