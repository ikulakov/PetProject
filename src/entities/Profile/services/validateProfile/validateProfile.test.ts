import { validateProfile } from './validateProfile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

const data = {
    username: '123',
    age: 30,
    country: Country.Russia,
    lastname: 'Kulakov',
    first: 'Ivan',
    city: 'Moscow',
    currency: Currency.RUB
}

describe('validateProfile.test', () => {
    test('success validate data', () => {
        const result = validateProfile(data)

        expect(result).toEqual([])
    })

    test('error validate profile data, without first name and lastname', () => {
        const result = validateProfile({ ...data, first: '', lastname: '' })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    })

    test('error validate profile data, without first age', () => {
        const result = validateProfile({ ...data, age: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ])
    })

    test('error validate profile data, without country', () => {
        const result = validateProfile({ ...data, country: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })

    test('error validate profile data, without country', () => {
        const result = validateProfile({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })
})
