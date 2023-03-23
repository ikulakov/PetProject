import { StateSchema } from 'app/providers/StoreProvider'
import { getAddCommentFormText, getAddCommentFormError } from './addCommentForm'

describe('addCommentForm.test.test', () => {
    test('getAddCommentFormText should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: '123'
            }
        }
        expect(getAddCommentFormText(state as StateSchema)).toEqual('123')
    })
    test('getAddCommentFormError should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error'
            }
        }
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error')
    })
    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentFormText(state as StateSchema)).toEqual('')
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined)
    })
})
