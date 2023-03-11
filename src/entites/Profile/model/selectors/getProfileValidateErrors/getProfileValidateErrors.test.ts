import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from 'entites/Profile/model/types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors.test', () => {
    test('should return errors', () => {
        const errors = [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
