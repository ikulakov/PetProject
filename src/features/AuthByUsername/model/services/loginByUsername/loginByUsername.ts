import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type User, userActions } from '@/entities/User'
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (AuthData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi
    const { username, password } = AuthData

    try {
        const response = await extra.api.post<User>('/login', {
            username,
            password,
        })

        if (!response.data) {
            throw new Error()
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.id)
        localStorage.setItem(
            LOCAL_STORAGE_LAST_DESIGN_KEY,
            response.data.features?.isAppRedesigned ? 'new' : 'old',
        )
        dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue('error')
    }
})
