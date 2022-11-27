import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * All imported styles and assets must be added
 * to .storybook/preview.js too.
 */
import './assets/styles/css-reset.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
