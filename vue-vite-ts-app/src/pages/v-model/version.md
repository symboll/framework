
### v-model 属于破坏性更新
- prop: value -> modelValue
- 事件: input -> update:modelValue
- v2 v-bind的 `.sync`修饰符和组件的model选项移除
- 新增支持多个`v-model`
- 新增支持自定义修饰符`Modfifiers`