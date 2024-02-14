```ts
/**
 * pinia 的api
 * 
 * $patch
 * $reset
 * $subscribe
 * $onAction
 */
const store = useStore()

store.$patch((state) => {
  state.age++
})

store.$reset()

store.$onAction((args) => {
  console.log('onAction args', args)
}, true)

store.$subscribe((args, state) => {
  console.log('args', args)
  console.log('state', state) 
}, {
  deep: true,
  detached: true,
  flush:'post' // 'pre', 'sync'
})
```