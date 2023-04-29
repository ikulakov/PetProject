
import { type DeepPartial } from '@reduxjs/toolkit'
import { type AddCommentFormSchema, addCommentFormActions, addCommentFormReducer } from '@/features/AddCommentForm'

describe('addCommentForm.test', () => {
    test('test addCommentForm set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {}
        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('Update comment text state'))
        ).toEqual({ text: 'Update comment text state' })
    })
})
