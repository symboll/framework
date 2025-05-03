
import { Observable } from 'rxjs'

const observable = new Observable((observer) => {
  // setTimeout(() => {
  //   observer.next({ name: 'zhansgan' })
  // }, 1000);

  let index = 1
  const timer = setInterval(() => {
    observer.next(index++)
    if (index === 3){
      // observer.complete()
      observer.error('错误')
      clearInterval(timer)
    }
  }, 1000)
})

const observer = {
  next: (value) => console.log(value),
  complete: () => console.log('end'),
  error: (err) => console.log(err),
}

observable.subscribe(observer)


// demo2
const observable2 = new Observable(() => console.log('hello world'))
// observable2.subscribe()
// observable2.subscribe()
// observable2.subscribe()
// observable2.subscribe()