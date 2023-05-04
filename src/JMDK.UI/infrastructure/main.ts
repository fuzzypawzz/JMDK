import { createApp } from 'vue'
import App from '@/JMDK.UI/components/app/App.vue'
import router from '@/JMDK.Core/router'
import bindFrameworkDependencies from '@/JMDK.Core/ioc/bind-framework-dependencies'

const app = createApp(App)

app.use(router)
app.use(bindFrameworkDependencies, {
  router,
})

app.mount('#app')
