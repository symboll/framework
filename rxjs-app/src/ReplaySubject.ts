import { ReplaySubject, Subject } from 'rxjs'

// 功能与Subject 类似。但有新订阅者时，两者处理方式不同。
// 1. Subject 不会广播历史结果
// 2. ReplaySubject 会广播所有历史结果

const replaySubject = new ReplaySubject()
// const replaySubject = new Subject()


replaySubject.subscribe(value => console.log(`Hello ${value}`))

replaySubject.next('1')
replaySubject.next('2')

setTimeout(() => {
  replaySubject.subscribe({
    next: (value) => console.log(`Hello: ${value}`) 
  })
}, 3000);