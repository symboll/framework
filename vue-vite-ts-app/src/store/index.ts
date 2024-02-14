import { createPinia, defineStore } from 'pinia'
import { StoreNames } from './constant'
import { getMockData } from './mock'
import { piniaPlugin } from './plugin'

const store = createPinia()
store.use(piniaPlugin({
  key: 'abc'
}))

const useStore = defineStore(StoreNames.TEST, {
  state: () => ({
    name: 'zhangsan',
    age: 18
  }),

  // 类似 computed
  getters: {

  },

  actions: {
    async setUserInfo () {
      const res = await getMockData()
      console.log(res)
      this.setAge(res.age)
    },
    setName () {
      this.name += 'a'
    },
    setAge (num: number) {
      this.age = num
    }
  }
})

export default store
export {
  useStore
}