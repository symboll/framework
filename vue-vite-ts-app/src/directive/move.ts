import type { Directive, DirectiveBinding } from 'vue'

export const vMove: Directive<any, void> = (el:HTMLElement, bing: DirectiveBinding) => { 

  const { modifiers } = bing
  let moveElement: HTMLDivElement = el as HTMLDivElement
  if (!modifiers.self) {
    moveElement = el.firstElementChild as HTMLDivElement
  }

  const mouseDown = (event: MouseEvent) => {
    let x = event.clientX - el.offsetLeft
    let y = event.clientY - el.offsetTop
    const mouseMove = (event: MouseEvent) => {
      el.style.left = event.clientX - x + 'px'
      el.style.top = event.clientY - y + 'px'
    }
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', mouseMove)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}