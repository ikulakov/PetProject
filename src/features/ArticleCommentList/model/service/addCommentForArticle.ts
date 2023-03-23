import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article'
import { Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
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
