import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserSchema, User } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        logout: state => {
            state.authData = undefined
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

export default userSlice.reducer
