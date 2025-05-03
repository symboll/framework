import { concatMap, from, fromEvent } from "rxjs";
import btn from '../document/btn'
import axios from "axios";

axios.interceptors.response.use(response => response.data)
 
fromEvent(btn, 'click')
  .pipe(
    concatMap(
      event => from(axios.get('http://localhost:3000/category'))
    ),
    concatMap(
      event => from(axios.get(`http://localhost:3000/goods?q=${event}`))
    )
  )
  .subscribe((event) => console.log(event))