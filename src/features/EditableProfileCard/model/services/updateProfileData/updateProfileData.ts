import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { ValidateProfileError } from "../../consts/consts"
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfile } from '../validateProfile/validateProfile'
import { type Profile } from '@/entities/Profile'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const formData = getProfileForm(getState())

        if (!formData) {
            return rejectWithValue([ValidateProfileError.NO_DATA])
        }

        const errors = validateProfile(formData)
        if (errors.length) {
            return rejectWithValue(errors)
        }
        try {
            const response = await extra.api.put<Profile>(`/profile/${formData.id || ''}`, formData)

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
