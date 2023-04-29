import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { type Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'features/ArticleCommentList/addCommentForArticle',
    async (commentText, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi

        const userData = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())

        if (!userData || !commentText || !article) {
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                text: commentText,
                userId: userData.id
            })

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (!response.data) {
                throw new Error()
            }

            dispatch(fetchCommentsByArticleId(article.id))

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
