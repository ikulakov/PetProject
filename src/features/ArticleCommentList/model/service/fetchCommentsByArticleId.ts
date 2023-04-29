import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'features/ArticleCommentList',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        if (!articleId) {
            return rejectWithValue('error')
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
