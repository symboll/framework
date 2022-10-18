import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from '@/pages/about/slice'
import homeReducer from '@/pages/home/slice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    about: aboutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store