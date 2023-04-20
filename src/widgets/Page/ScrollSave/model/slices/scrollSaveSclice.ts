import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ScrollSaveSchema } from '../types/ScrollSchema'

const initialState: ScrollSaveSchema = {
    scroll: {}
}

export const scrollSaveSclice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position
        }
    }
})

export const { actions: scrollActions } = scrollSaveSclice
export const { reducer: scrollReducer } = scrollSaveSclice
