import { createApp } from 'vue'
import App from '@/JMDK.UI/components/app/App.vue'
import router from '@/JMDK.Core/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
