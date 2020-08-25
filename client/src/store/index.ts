import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import articleReducer from '../slices/article'
import logger from 'redux-logger'
const middlewares = [
  ...getDefaultMiddleware()
]
// development concat redux logger
if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.concat(logger)
}
export const store = configureStore({
  reducer: {
    article: articleReducer
  },
  middleware: middlewares
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof  store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<String>>