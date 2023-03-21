import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile, ValidateProfileError } from '../../model/types/profile'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { validateProfile } from '../validateProfile/validateProfile'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const formData = getProfileForm(getState())

        const errors = validateProfile(formData)
        if (errors.length) {
            return rejectWithValue(errors)
        }
        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)