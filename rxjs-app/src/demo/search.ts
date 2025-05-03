import { from, fromEvent, map, switchMap,debounceTime, distinctUntilChanged } from "rxjs"
import axios from 'axios'

const search = document.createElement('input')

search.setAttribute('type', 'text')
search.setAttribute('placeholder', '请输入...')
document.body.append(search)

axios.interceptors.response.use(response => response.data)

fromEvent(search, 'keyup')
  .pipe(
    debounceTime(800),
    map((event:any ) => event.target.value),
    distinctUntilChanged(),
    switchMap((keyword: any) => from(axios.get(`http://localhost:3000/goods?q=${keyword}`)))
  )
  .subscribe(console.log)