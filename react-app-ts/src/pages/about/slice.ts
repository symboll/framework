import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
interface AboutState {
  count: number
}

const initialState: AboutState = {
  count: 0,
}

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = aboutSlice.actions
export default aboutSlice.reducer
