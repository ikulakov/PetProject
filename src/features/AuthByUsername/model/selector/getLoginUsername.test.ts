import { type StateSchema } from '@/app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
    test('shoul return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Ivan'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('Ivan')
    })
    test('shoul work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
