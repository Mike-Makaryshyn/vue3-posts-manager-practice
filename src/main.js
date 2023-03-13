import { createApp } from 'vue'
import App from './components/App'
import globalUIComponents from '@/components/UI'

const app = createApp(App);

globalUIComponents.forEach(component => {
   app.component(component.name, component)
})

app.mount('#app')
