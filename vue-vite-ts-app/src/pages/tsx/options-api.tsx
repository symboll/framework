

import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      age: 23
    }
  },
  render () {
    return (
      <div> age: { this.age }</div>
    )
  },
  methods: {

  },
  mounted () {

  }
})