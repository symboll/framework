 import { onMounted } from 'vue'

interface Options {
  el: string
}

export default function (options: Options ): Promise<string> {
  const base64 = (img: HTMLImageElement) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = img.width
    canvas.height = img.height

    ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
    return canvas.toDataURL()
  }

  return new Promise((resolve) => {
    onMounted(() => {
      const image:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
      
      image.onload= () => {
        resolve(base64(image))
      }
    })
  })
}