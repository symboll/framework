import { toRaw } from 'vue'
import { PiniaPluginContext } from 'pinia'

const __piniaDefalutKey__ = 'default'

const setStorage = (key: string, value: any):void => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string): any => {
  return JSON.parse(sessionStorage.getItem(key) ?? '{}')
}

interface IPiniaPluginParmas {
  key?: string
}
export const piniaPlugin = (options: IPiniaPluginParmas) => {
  return (context: PiniaPluginContext) => {
    const { store } = context

    const key = `${options?.key ?? __piniaDefalutKey__}-${store.$id}`
    const data = getStorage(key)
    store.$subscribe(() => {
      setStorage(key, toRaw(store.$state) )
    })

    return {
      ...data
    }
  }
}