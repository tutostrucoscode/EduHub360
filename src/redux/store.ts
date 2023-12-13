import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slice/authReducer'

const reducer = combineReducers({
    auth: authReducer,
})

export const store = configureStore({ reducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
