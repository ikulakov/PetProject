import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors'
import { type Article, ArticleType } from '../../types/article'

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('entities/Article/fetchArticlesList', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const limit = getArticlesPageLimit(getState())
    const page = getArticlesPageNum(getState())
    const sort = getArticlesPageSort(getState())
    const order = getArticlesPageOrder(getState())
    const search = getArticlesPageSearch(getState())
    const type = getArticlesPageType(getState())

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
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
