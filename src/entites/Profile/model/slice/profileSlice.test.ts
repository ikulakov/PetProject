import { Country } from 'entites/Country'
import { Currency } from 'entites/Currency'
import { ProfileSchema, profileReducer, profileActions, updateProfileData } from 'entites/Profile'
import { ValidateProfileError } from 'entites/Profile/model/types/profile'

const data = {
    username: '123',
    age: 30,
    country: Country.Russia,
    lastname: 'Kulakov',
    first: 'Ivan',
    city: 'Moscow',
    currency: Currency.RUB
}

describe('profileSlice.test', () => {
    test('test update profile in form', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
            username: '123456'
        })
        )).toEqual({
            form: {
                username: '123456'
            }
        })
    })
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true })
    })
    test('test cancel edit ', () => {
        const state: DeepPartial<ProfileSchema> = {
            data
        }
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data
        })
    })
})
