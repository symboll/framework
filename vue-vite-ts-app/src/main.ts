import { createApp } from 'vue'
import useResize from 'vue-symboll-hook'
import App from './App.vue'
import router from './router'
import store from './store'
import message from './components/message'
import { registration } from './components/editor/registration.ts'

const app = createApp(App)

app.config.globalProperties.$http = () => {
  return 'HTTP - '
}

app
  .use(store)
  .use(router)
  .use(useResize)
  .use(message, { duration: 5000 })
  .mount('#app');

registration();