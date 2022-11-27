/**
 * All imported styles and assets from src/main.ts
 * must be added here too.
 */
import '../src/assets/styles/css-reset.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
