
import { fromEvent, range, take, takeWhile, takeUntil } from 'rxjs'
import btn from '../document/btn'

range(2,10)
  // .pipe(take(5))
  .pipe(takeWhile(n => n < 8))
  .subscribe(console.log)


fromEvent(document, 'mousemove')
  .pipe(takeUntil(
    fromEvent(btn, 'click ')
  ))
  .subscribe(console.log)