import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { articleListSliceActions } from '../../../model/slice/articleListSlice/articleListSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type SortOrder } from '@/shared/types'
import { type ArticleSortField, type ArticleType } from '../../types/article'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'entities/Article/initArticlesPage',
    // eslint-disable-next-line @typescript-eslint/require-await
    async (searchParams, thunkApi) => {
        const { dispatch, getState } = thunkApi
        const inited = getArticlesPageInited(getState())

        if (inited) return

        searchParams.forEach((value, key) => {
            switch (key) {
                case 'order':
                    dispatch(articleListSliceActions.setOrder(value as SortOrder))
                    break
                case 'sort':
                    dispatch(articleListSliceActions.setSort(value as ArticleSortField))
                    break
                case 'q':
                    dispatch(articleListSliceActions.setSearch(value))
                    break
                case 'type':
                    dispatch(articleListSliceActions.setType(value as ArticleType))
                    break
            }
        })
        dispatch(articleListSliceActions.initState())
        dispatch(fetchArticlesList({}))
    }
)
