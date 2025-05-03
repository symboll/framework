import { fromEvent, throttleTime, debounceTime, pipe } from "rxjs";


fromEvent(document, 'click')
  // .pipe(throttleTime(2000))
  .pipe(debounceTime(2000))
  .subscribe(console.log)