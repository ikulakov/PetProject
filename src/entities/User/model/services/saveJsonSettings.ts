import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { setJsonSettingsMutation } from '../../api/userApi'
import { getUserAuthData } from '../selector/getUserAuthData/getUserAuthData'
import { JsonSettings } from '../types/jsonSettings'

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch, getState } = thunkApi

    const userData = getUserAuthData(getState())
    const currentSettings = userData?.jsonSettings

    if (!userData) {
        return rejectWithValue('')
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap()

        if (!response.jsonSettings) {
            return rejectWithValue('')
        }

        return response.jsonSettings
    } catch (e) {
        console.log(e)
        return rejectWithValue('')
    }
})
