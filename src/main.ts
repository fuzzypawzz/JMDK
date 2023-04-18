import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/JMDK.Core/router'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
