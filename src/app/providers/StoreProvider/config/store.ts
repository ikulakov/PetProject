import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entites/Counter/model/slice/counterSlice'
import { StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
