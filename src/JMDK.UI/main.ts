import { createApp } from 'vue'
import App from '@/JMDK.UI/components/app/App.vue'
import router from '@/JMDK.Core/router'

import '@/JMDK.UI/styles/main.scss'

createApp(App).use(router).mount('#app')
