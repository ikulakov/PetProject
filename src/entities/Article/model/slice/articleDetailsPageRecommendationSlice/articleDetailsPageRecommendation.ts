import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsPageRecommendationSchema } from '../../types/articleDetailsPageRecommendationSchema'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article/model/types/article'
import { fetchArticlesRecommendations } from 'entities/Article/model/services/fetchArticlesRecommendations/fetchArticlesRecommendations'

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleRecommendations ?? recommendationsAdapter.getInitialState()
)

export const articleDetailsPageRecommendation = createSlice({
    name: 'article',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsPageRecommendationReducer } = articleDetailsPageRecommendation
