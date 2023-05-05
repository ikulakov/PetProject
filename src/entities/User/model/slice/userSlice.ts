import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserSchema, type User } from '../types/user'

const initialState: UserSchema = {
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state, action: PayloadAction<User | undefined>) => {
            state.authData = action.payload
            state._inited = true
        },
        logout: (state) => {
            state.authData = undefined
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

export default userSlice.reducer
