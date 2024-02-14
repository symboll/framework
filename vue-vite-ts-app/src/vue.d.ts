import { msgParams } from '@/interface/message';

declare module 'vue' {
  export interface ComponentCustomProperties {
    $http: () => void,
    $message: {
      hide: () => void,
      show: (params: msgParams) => void,
      success: (params: string) => void,
      warning: (params: string) => void,
      error: (params: string) => void,
      info: (params: string) => void,
    }
  }
}