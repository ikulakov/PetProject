import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article } from '../../types/article'

export const fetchArticlesRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('entities/Article/fetchArticlesRecommendations', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: 4,
            },
        })

        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (e) {
        return rejectWithValue('error')
    }
})
