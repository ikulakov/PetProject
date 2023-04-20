import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            username: '123',
            age: 30,
            country: Country.Russia,
            lastname: 'Kulakov',
            first: 'Ivan',
            city: 'Moscow',
            currency: Currency.RUB
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('shoul work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
