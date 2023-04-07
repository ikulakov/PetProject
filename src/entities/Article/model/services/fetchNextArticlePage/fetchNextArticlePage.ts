import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum } from '../../selectors/articlesPageSelectors'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articleListSliceActions } from '../../slice/articleListSlice/articleListSlice'

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'entities/Article/fetchNextArticlePage',
    // eslint-disable-next-line @typescript-eslint/require-await
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi

        const hasMore = getArticlesPageHasMore(getState())
        const page = getArticlesPageNum(getState())
        const isLoading = getArticlesPageIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articleListSliceActions.setPage(page + 1))
            dispatch(fetchArticlesList({
                page: page + 1
            }))
        }
    }
)
