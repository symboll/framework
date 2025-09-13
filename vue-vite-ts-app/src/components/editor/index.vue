<template>
  <div>
    <div class="editor" ref="editorRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import * as monaco from 'monaco-editor';
import markdown from './test.md'

const props = withDefaults(defineProps<{
  markdown: any,
  theme?: string,
  language?: string
}>(), {
  markdown,
  theme: 'vs-dark',
  language:'html'
})

const editorRef = ref<HTMLDivElement>()
const style = reactive({
  height: '400px'
})

let editor: monaco.editor.IStandaloneCodeEditor | null;
onMounted(() => {
  const value = getMarkdownString(props.markdown.render().children)
  editor = monaco.editor.create(editorRef.value!, {
    value,
    language: props.language,
    theme: props.theme,
    minimap: { enabled: false },
    scrollBeyondLastLine:false,
    automaticLayout: true, 
    scrollbar: {
      vertical: 'auto', // 垂直滚动条的显示方式
      horizontal: 'auto', // 水平滚动条的显示方式
      verticalScrollbarSize: 4, // 垂直滚动条的宽
      horizontalScrollbarSize: 4, // 水平滚动条的高度
    }
  });
  console.log('editor.getContentHeight', editor.getContentHeight())
  style.height = `${editor.getContentHeight()}px`
})

onUnmounted(() => {
  if (editor) {
    editor.dispose()
  }
})

const getMarkdownString = (render: any[]) => {
  let x=''
  for (let i =0; i< render.length; i++) {
    const current = render[i].children[0].children
    x+= current
  }
  return x
}

</script>
<style scoped style='scss'>
.editor {
  width: 600px;
  height: v-bind('style.height');
}
</style>