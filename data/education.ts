import { normalizeLocale, type LocaleCode } from './i18n'

export interface Education {
  title: string
  school: string
  dates: string
}

export const educationByLocale = {
  fr: [
    {
      title: 'Bachelor Développeur JavaScript React',
      school: 'OpenClassrooms',
      dates: '2023-2024'
    },
    {
      title: 'Diplôme Développeur Web',
      school: 'OpenClassrooms',
      dates: '2022-2023'
    }
  ],
  en: [
    {
      title: 'Bachelor JavaScript React Developer',
      school: 'OpenClassrooms',
      dates: '2023-2024'
    },
    {
      title: 'Web Developer Diploma',
      school: 'OpenClassrooms',
      dates: '2022-2023'
    }
  ]
} satisfies Record<LocaleCode, Education[]>

export function getEducation(locale: string): Education[] {
  return educationByLocale[normalizeLocale(locale)]
}
