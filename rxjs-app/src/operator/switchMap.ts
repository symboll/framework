import { fromEvent, interval, switchMap } from 'rxjs'
import btn from '../document/btn'


fromEvent(btn, 'click')
  .pipe(switchMap(event => interval(1000)))
  .subscribe(val => console.log(val))