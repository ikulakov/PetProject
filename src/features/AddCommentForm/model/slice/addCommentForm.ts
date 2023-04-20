import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    text: '',
    error: undefined
}

export const addCommentForm = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
})

export const { actions: addCommentFormActions } = addCommentForm
export const { reducer: addCommentFormReducer } = addCommentForm
