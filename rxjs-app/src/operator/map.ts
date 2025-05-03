import { range } from 'rxjs'
import { map } from 'rxjs/operators'

// rangle(start, length)
range(2,5)
.pipe(map(n => n * 10))
.subscribe(val => console.log(val))
