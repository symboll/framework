
import { fromEvent, switchMap, map, takeUntil } from 'rxjs'
const box = document.createElement('div')
box.style = `
  width: 100px;
  height: 100px;
  background: pink;
  borderRadius: 4px;
  position: absolute;
  left: 20px;
  top: 20px;
`
document.body.appendChild(box)

fromEvent(box, 'mousedown')
  .pipe(
    map((event: any) => ({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    })),
    switchMap(({x, y}) => fromEvent(document,'mousemove')
      .pipe(
        map((event:any) => ({
          left: event.clientX - x,
          top: event.clientY - y
        })),
        takeUntil(fromEvent(document, 'mouseup'))
    ))
  ) 
  .subscribe(({left, top}) => {
    box.style.left = left + 'px'
    box.style.top  = top + 'px'
  })

