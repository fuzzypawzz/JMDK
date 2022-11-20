interface IButtonOption {
  text: string
  externalLink?: string
  title?: string
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
      text: 'GitHub',
      externalLink: 'https://github.com/fuzzypawzz',
      title: 'Browse @fuzzypawzz on GitHub',
    },
    {
      text: 'LinkedIn',
      externalLink: 'https://dk.linkedin.com/in/jannik-maag',
      title: 'Visit Janniks LinkedIn profile',
    },
    {
      text: 'Storybook',
      title: 'Discover the Storybook of this website',
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
