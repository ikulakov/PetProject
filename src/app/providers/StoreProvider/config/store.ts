import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entites/Counter/model/slice/counterSlice'
import { userReducer } from 'entites/User'
import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-expect-error temp
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
