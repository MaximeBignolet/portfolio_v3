export const localeCodes = ['fr', 'en'] as const

export type LocaleCode = typeof localeCodes[number]

export function normalizeLocale(locale: string): LocaleCode {
  return locale === 'en' ? 'en' : 'fr'
}
