import { BUTTON_VARIANT } from '@/components/CButton/CButton.vue'

interface IButtonOption {
  text: string
  externalLink?: string
  title?: string
  variant?: BUTTON_VARIANT
}

export interface IContentModel {
  heading: string
  description: string
  buttonOptions: IButtonOption[]
  hashTags: string[]
}

export const contentModel: IContentModel = {
  heading: 'Jannik Maag',
  description: `Senior Web Developer at Telia Company.<br />
  Passionate about Front-End architecture.<br />
  Freelancer.<br />
  A human being.`,
  buttonOptions: [
    {
      text: 'My GitHub',
      externalLink: 'https://github.com/fuzzypawzz',
      title: 'Browse @fuzzypawzz on GitHub',
      variant: BUTTON_VARIANT.SECONDARY,
    },
    {
      text: 'My profile on LinkedIn',
      externalLink: 'https://dk.linkedin.com/in/jannik-maag',
      title: 'Visit Janniks LinkedIn profile',
      variant: BUTTON_VARIANT.SECONDARY,
    },
    {
      text: 'Storybook',
      externalLink: 'https://jmdkstorybook.netlify.app',
      title: 'Discover the Storybook of this website',
      variant: BUTTON_VARIANT.SECONDARY,
    },
  ],
  hashTags: [
    'TypeScript',
    'Vue.js',
    'Swift',
    'Nuxt',
    'ASP.NET',
    'Flutter',
    'EPI Server',
    'MS Azure',
  ],
}
