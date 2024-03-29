import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../consts/consts'

describe('getProfileValidateErrors.test', () => {
    test('should return errors', () => {
        const errors = [
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        )
    })
})
