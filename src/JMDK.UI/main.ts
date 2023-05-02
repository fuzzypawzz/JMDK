import { createApp } from 'vue'
import App from '@/JMDK.UI/components/app/App.vue'
import router from '@/JMDK.Core/router'
import bindFrameworkDependencies from '@/JMDK.Core/ioc/bind-framework-dependencies'

import '@/JMDK.UI/styles/main.scss'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(bindFrameworkDependencies, {
  router, pinia
})

app.mount('#app')
