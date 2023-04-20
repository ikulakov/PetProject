import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Article, type ArticleDetailsSchema } from '../../types/article'
import { getArticleById } from '../../services/getArticleById/getArticleById'

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const articleDetailsSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false
                state.data = action.payload
                state.error = undefined
            })
            .addCase(getArticleById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
