import { Subject } from 'rxjs'

// 用户创建空的可观察对象。在订阅后，不会立即执行。
const subject = new Subject()

subject.subscribe({ next: (value) => console.log(`Hello ${value}`) })
subject.subscribe({ next: (value) => console.log(`Hello ${value}`) })

setTimeout(() => {
  subject.next('world')
}, 1000);