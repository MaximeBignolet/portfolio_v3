<script setup lang="ts">
withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md'
  block?: boolean
}>(), {
  to: undefined,
  href: undefined,
  variant: 'primary',
  size: 'md',
  block: false
})

const base = 'inline-flex items-center justify-center gap-2 rounded font-medium border transition-colors duration-150 active:translate-y-px'

const variantClasses = {
  primary: 'bg-ink text-bg border-transparent hover:bg-accent hover:text-accent-ink',
  ghost: 'bg-transparent text-ink border-line-strong hover:border-ink'
}

const sizeClasses = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-[18px] py-[13px] text-[15px]'
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[base, variantClasses[variant], sizeClasses[size], block ? 'w-full' : '']"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :target="href.startsWith('mailto:') ? undefined : '_blank'"
    :rel="href.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
    :class="[base, variantClasses[variant], sizeClasses[size], block ? 'w-full' : '']"
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    :class="[base, variantClasses[variant], sizeClasses[size], block ? 'w-full' : '']"
  >
    <slot />
  </button>
</template>
