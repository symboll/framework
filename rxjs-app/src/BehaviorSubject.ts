
import { BehaviorSubject } from 'rxjs'


// 拥有Subject全部功能。但是在创建Observable对象时可以传入默认值。观察者订阅后，可以直接拿到默认值
const behaviorSubject = new BehaviorSubject('default value')

behaviorSubject.subscribe({ next: (value) => console.log(`Hello ${value}`) })

behaviorSubject.next('world ')