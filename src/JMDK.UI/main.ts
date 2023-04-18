import { createApp } from 'vue'
import App from '@/JMDK.UI/App.vue'
import router from '@/JMDK.Core/router'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
