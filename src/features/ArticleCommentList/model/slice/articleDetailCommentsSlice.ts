import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment'
import { fetchCommentsByArticleId } from '../service/fetchCommentsByArticleId'
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsComments ?? commentsAdapter.getInitialState(),
)

const articleDetailCommentsSlice = createSlice({
    name: 'articleDetailCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            ids: [],
            entities: {},
            isLoading: false,
            error: undefined,
        },
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false
                    commentsAdapter.setAll(state, action.payload)
                },
            )
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articleDetailCommentsActions } =
    articleDetailCommentsSlice
export const { reducer: articleDetailCommentsReducer } =
    articleDetailCommentsSlice
