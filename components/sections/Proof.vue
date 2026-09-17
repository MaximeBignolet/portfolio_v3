<script setup lang="ts">
import { getProof } from '~/data/links'

const { locale, t } = useI18n()
const proof = computed(() => getProof(locale.value))
</script>

<template>
  <section class="border-y border-line bg-surface" :aria-label="t('proof.label')">
    <dl class="wrap grid sm:grid-cols-3">
      <div
        v-for="(item, index) in proof"
        :key="item.value"
        class="grid gap-1 py-[18px] sm:py-[26px]"
        :class="index > 0 ? 'border-t border-line sm:border-l sm:border-t-0 sm:pl-7' : ''"
      >
        <dt class="font-display text-[30px] font-semibold leading-none tracking-[-0.02em] tabular-nums sm:text-[clamp(30px,3.4vw,40px)]">
          {{ item.value }}
        </dt>
        <dd class="max-w-[28ch] text-[14.5px] text-muted">{{ item.label }}</dd>
      </div>
    </dl>
  </section>
</template>
