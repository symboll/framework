
export type messageType = 'success' | 'error' | 'warning' | 'info' | 'default'

interface msg {
  message: string,
  type: messageType
}


export type msgParams = string | msg
