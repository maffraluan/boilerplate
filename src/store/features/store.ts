import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { charactersApi } from './character/api/character-api'

import counterReducer from './counter/slices/counter-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [charactersApi.reducerPath]: charactersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
