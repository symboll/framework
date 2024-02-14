```ts
// vue2
Vue.prototype.$http = () => {}

// vue3
const app = createApp({})
app.config.globalProperties.$http = () => {
  return 'HTTP - '
}

// vue.d.ts
declare module 'vue' {
  export interface ComponentCustomProperties {
    $http: () => void
  }
}

// use
import { getCurrentInstance } from 'vue'

const app = getCurrentInstance()
app?.proxy?.$http()
```