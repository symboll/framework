```ts
watch(() => cb, {
  /**
   * default: false
   * true: 深度监听
   */
  deep: true, 
  /**
   * default: false
   * true: cb 默认先执行一次
   */
  immediate: true,  
  /**
   * default: pre: 组件更新之前调用
   * sync 同步执行 
   * post 组件更新之后执行 
   */
  flush: 'pre',
})
```
