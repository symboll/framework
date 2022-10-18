import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

interface HomeState {
  name: string
}

const initialState: HomeState = {
  name: 'zhangsan',
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const { changeName } = homeSlice.actions
export default homeSlice.reducer