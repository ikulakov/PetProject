import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article/model/types/article'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors'

interface FetchArticlesListArgs {
    page: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListArgs, ThunkConfig<string>>(
    'entities/Article/fetchArticlesList',
    async (args, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const { page = 1 } = args
        const limit = getArticlesPageLimit(getState())

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
