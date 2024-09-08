import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/pages/login-page/slice'

export default configureStore({
  reducer: {
    login: loginReducer
  }
})
 