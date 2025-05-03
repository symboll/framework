import { of } from 'rxjs'

of('a', 'b', [], {}, true, 20)
  .subscribe(console.log)