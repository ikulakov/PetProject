import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article } from '../../types/article'

export const getArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/getArticleById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user'
                }
            })

            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
