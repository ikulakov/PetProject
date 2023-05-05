import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type User, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

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
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!response.data) {
            throw new Error()
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        )
        dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue('error')
    }
})
