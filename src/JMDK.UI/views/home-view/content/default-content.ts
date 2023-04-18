import { BUTTON_VARIANT } from '@/JMDK.UI/components/j-button/j-button.vue'
import type { Button } from '@/JMDK.UI/types/content/button.types'

export type HomeViewContentModel = {
  heading: string
  handle: string
  description: string
  buttonOptions: Button[]
  hashTags: string[]
}

export const contentModel: HomeViewContentModel = {
  heading: 'Jannik Maag',
  handle: '@fuzzypawzz on GitHub',
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
