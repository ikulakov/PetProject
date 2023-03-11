import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from 'entites/Currency'
import { Country } from 'entites/Country'

const data = {
    username: '123',
    age: 30,
    country: Country.Russia,
    lastname: 'Kulakov',
    first: 'Ivan',
    city: 'Moscow',
    currency: Currency.RUB
}

describe('fetchProfileData.test', () => {
    test('success fecthing data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
