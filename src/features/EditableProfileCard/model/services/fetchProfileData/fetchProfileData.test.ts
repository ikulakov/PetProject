import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const data = {
    id: '1',
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

        const result = await thunk.callThunk(data.id)

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk(data.id)

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
