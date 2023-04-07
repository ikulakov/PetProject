import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleListSchema, ArticleView } from '../../../model/types/article'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage ?? articlesAdapter.getInitialState()
)

const articleListSlice = createSlice({
    name: 'articleListSlice',
    initialState: articlesAdapter.getInitialState<ArticleListSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,
        view: 'grid',
        page: 1,
        hasMore: true
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        InitialState: state => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === 'list' ? 4 : 9
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleListSliceReducer } = articleListSlice
export const { actions: articleListSliceActions } = articleListSlice
