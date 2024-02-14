
// debounce 理解为最后一个人说了算
export function debounce(fn: Function, delay: number): Function {
  let timer: NodeJS.Timeout = null as any as NodeJS.Timeout
  return function() {
    const arg = Array.from(arguments)
    const ctx = this

    if (timer) {
      clearTimeout(timer)
    } else {
      timer = setTimeout(() => {
        fn.apply(ctx, arg)
      }, delay)
    }
  }
}

// throttle 理解为 第一个人说了算
export function throttle(fn:Function, interval:number): Function  {
  let last = 0

  return function() {
    const ctx = this
    const arg = Array.from(arguments)
    let now = +new Date()
    if (now - last > interval) {
      last = now
      fn.apply(ctx, arg)
    }
  }
}