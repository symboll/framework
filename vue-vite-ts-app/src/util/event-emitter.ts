type eventKey = string | symbol

class eventEmitter {
  eventMap: Map<eventKey, Function[]>
  constructor() {
    this.eventMap = new Map()
  }

  on (type: eventKey, cb: Function) {
    if(typeof cb !== 'function') { throw new Error('xxx') }
    if(!this.eventMap.has(type)) {
      this.eventMap.set(type, [])
    }
    this.eventMap.get(type)!.push(cb)
  }

  emit (type: eventKey, ...params: any[]) {
    const eventList = this.eventMap.get(type)
    if (Array.isArray(eventList)) {
      eventList.forEach(event => {
        event.apply(null, params)
      })
    }
  }
  off (type: eventKey, cb: Function) {
    if(this.eventMap.has(type)) {
      const index = this.eventMap.get(type)!.findIndex(item => item === cb)
      if(index >= 0) {
        this.eventMap.get(type)!.splice(index, 1)
      }
    }
  }
}
const bus = new eventEmitter()
export default bus