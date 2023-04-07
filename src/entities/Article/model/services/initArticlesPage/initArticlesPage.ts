import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageInited } from 'entities/Article/model/selectors/articlesPageSelectors'
import { articleListSliceActions } from '../../../model/slice/articleListSlice/articleListSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'entities/Article/initArticlesPage',
    // eslint-disable-next-line @typescript-eslint/require-await
    async (args, thunkApi) => {
        const { dispatch, getState } = thunkApi

        const inited = getArticlesPageInited(getState())

        if (inited) {
            dispatch(articleListSliceActions.initState())
            dispatch(fetchArticlesList({
                page: 1
            }))
        }
    }
)
