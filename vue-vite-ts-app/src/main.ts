import { createApp } from 'vue'
import useResize from 'vue-symboll-hook'
import App from './App.vue'
import router from './router'
import store from './store'
import { vHighLight } from './directive/highlight'
import message from './components/message'

const app = createApp(App)


app.config.globalProperties.$http = () => {
  return 'HTTP - '
}

app
  .directive('high-light', vHighLight)
  .use(store)
  .use(router)
  .use(useResize)
  .use(message, { duration: 5000 })
  .mount('#app')
