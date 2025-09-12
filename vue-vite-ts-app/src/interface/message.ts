
export type messageType = 'success' | 'error' | 'warning' | 'info' | 'default'

export interface IMessage {
  message: string,
  type: messageType,
  duration?: number,
  close?: boolean,
  icon?: boolean,

  uuid?: string,
}

