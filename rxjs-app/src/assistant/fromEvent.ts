
import { fromEvent } from 'rxjs'
import { pluck, map } from 'rxjs/operators'
import btn from '../document/btn'

fromEvent(btn, 'click')
  .pipe(map(event => event.target))
  // .pipe(pluck('target'))  
  .subscribe(e => console.log(e))