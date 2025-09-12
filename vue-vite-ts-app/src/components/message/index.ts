import { createVNode, render } from 'vue'
import type { App, VNode } from 'vue'
import Message from './index.vue'

export default {
  install (app: App, config: any) {
    const vnode:VNode = createVNode(Message, config)
    render(vnode, document.body)
    app.config.globalProperties.$message = {
      show: vnode.component?.exposed?.show,
      hide: vnode.component?.exposed?.hide,

      success: vnode.component?.exposed?.success,
      warning: vnode.component?.exposed?.warning,
      error: vnode.component?.exposed?.error,
      info: vnode.component?.exposed?.info,
    }
  }
}