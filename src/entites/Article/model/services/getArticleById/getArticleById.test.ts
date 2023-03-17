import { getArticleById } from './getArticleById'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
    id: '1',
    title: 'subtitle'
}

describe('getArticleById.test', () => {
    test('success fecthing data', async () => {
        const thunk = new TestAsyncThunk(getArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(getArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk('2')

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
