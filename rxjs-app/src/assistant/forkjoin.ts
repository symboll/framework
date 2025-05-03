import axios from "axios"
import { forkJoin, from } from "rxjs"


// forkJoin 是 Rx版本的 Promise.all(), 即表示等所有的Observable都完成后，才一次性返回值
axios.interceptors.response.use(response => response.data)

forkJoin({
  goods: from(axios.get('http://localhost:3000/goods')),
  category: from(axios.get('http://localhost:3000/category'))
}).subscribe(console.log)