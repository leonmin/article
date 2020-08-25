import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppDispatch } from 'src/store'
const initialState = {
  value: 0
}
export const slice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, incrementByAmount } = slice.actions
export const incrementAsync = (mount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(mount))
  }, 1000)
}
export const selectValue = (state: RootState) => state.article.value

export default slice.reducer
