import { type DeepPartial } from '@reduxjs/toolkit'
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../slice/addCommentForm'
import { AddCommentFormSchema } from '../types/addCommentForm'

describe('addCommentForm.test', () => {
    test('test addCommentForm set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {}
        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('Update comment text state'),
            ),
        ).toEqual({ text: 'Update comment text state' })
    })
})
