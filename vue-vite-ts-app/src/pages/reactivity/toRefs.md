```typescript
const toRefs = <T extends object>(object: T) => {
  const map:any = {}
  for (let key of object) {
    map[key] = toRef(object,key)
  }
  return object
}
```