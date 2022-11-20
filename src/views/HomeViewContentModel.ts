interface IButtonOption {
  text: string
  href: string
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
      href: '/',
    },
    {
      text: 'LinkedIn',
      href: '/',
    },
    {
      text: 'Storybook',
      href: '/',
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
