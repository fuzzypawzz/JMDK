import { BUTTON_VARIANT } from '@/JMDK.UI/components/j-button/j-button.constants'
import { TESTING_ID } from '@/JMDK.UI/views/home-view/home-view.constants'

export const contentModel = {
  heading: 'Jannik Maag',
  handle: '@fuzzypawzz on GitHub',
  description: `Senior Web developer.<br />
  Passionate about Front-End architecture.<br />
  Freelancer.<br />
  A human being.`,
  buttonOptions: [
    {
      text: 'My GitHub',
      externalLink: 'https://github.com/fuzzypawzz',
      title: 'Browse @fuzzypawzz on GitHub',
      variant: BUTTON_VARIANT.SECONDARY,
      testId: TESTING_ID.GITHUB_BUTTON,
    },
    {
      text: 'My profile on LinkedIn',
      externalLink: 'https://dk.linkedin.com/in/jannikmaag',
      title: 'Visit Janniks LinkedIn profile',
      variant: BUTTON_VARIANT.SECONDARY,
      testId: TESTING_ID.LINKEDIN_BUTTON,
    },
    {
      text: 'Storybook',
      externalLink: 'https://jmdkstorybook.netlify.app',
      title: 'Discover the Storybook of this website',
      variant: BUTTON_VARIANT.SECONDARY,
      testId: TESTING_ID.STORYBOOK_BUTTON,
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
