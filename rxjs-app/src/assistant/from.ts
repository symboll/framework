
import { from } from 'rxjs'

// 将 Array，Promise， Iterator 转换成 obserable对象
from(['a','b','c']).subscribe(val => console.log(val))


function p () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 2000);
  })
}

from(p()).subscribe(console.log)
