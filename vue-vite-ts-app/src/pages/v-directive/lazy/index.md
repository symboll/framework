
```typescript
// 异步导入
const modules = import.meta.glob('./*.josn')

for (const path in modules) {
  const module = await modules[path]()
}

// 同步导入 
const modules = import.meta.glob('./*.json', { eager: true })
for (const path in modules) {
  const module = modules[path]
}
```
```ts
// 判断当前元素是否在可视区域
const observer = new IntersectionObserver((entry) => {
  if (entry[0].intersectionRatio > 0){
    // do somethings
    observer.unobserve(el)
  }
})
observer.observe(el)
```