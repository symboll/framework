import type { Directive } from 'vue'

import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'

import 'highlight.js/styles/base16/snazzy.css'
import css from 'highlight.js/lib/languages/css'

hljs.registerLanguage('css', css)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)

export const vHighLight: Directive = {
  mounted(el: HTMLElement) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
      block.className = ''
      hljs.highlightElement(block)
    });
  }
}