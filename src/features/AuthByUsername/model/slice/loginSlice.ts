import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { LoginSchema } from '../types/LoginSchema'
import { User } from 'entites/User'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false
                // state.username = action.payload.username
            })
            .addCase(loginByUsername.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(loginByUsername.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice