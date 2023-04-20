import { type StateSchema } from 'app/providers/StoreProvider'
import { getUserAuthData } from './getUserAuthData'

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            username: 'admin',
            avatar: 'link_to_avatar'
        }
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data
            }
        }
        expect(getUserAuthData(state as StateSchema)).toEqual(data)
    })
    test('shoul work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined)
    })
})
