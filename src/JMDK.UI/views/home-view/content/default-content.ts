import { BUTTON_VARIANT } from '@/JMDK.UI/components/j-button/constants/button-variant'
import type { ViewModel } from '../presenter/view-model'

export const contentModel: ViewModel['content'] = {
  heading: 'Jannik Maag',
  handle: '@fuzzypawzz on GitHub',
  description: `Senior Web developer and Front-End architect.<br />
  Passionate about framework agnostic design.<br />
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
    'React',
    'Swift',
    'Nuxt',
    'ASP.NET',
    'Flutter',
    'EPiServer',
    'MS Azure',
  ],
}
