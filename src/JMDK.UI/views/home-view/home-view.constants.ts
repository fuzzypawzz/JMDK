export const TESTING_ID = {
  GITHUB_BUTTON: 'HOME_VIEW_GITHUB_BUTTON',
  STORYBOOK_BUTTON: 'HOME_VIEW_STORYBOOK_BUTTON',
  LINKEDIN_BUTTON: 'HOME_VIEW_LINKEDIN_BUTTON',

  includes: function (value: string) {
    return Object.values(this).includes(value)
  },
}
