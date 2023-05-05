import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsRecommendationIsLoading = (state: StateSchema) =>
    state.articleRecommendations?.isLoading || false
export const getArticleDetailsRecommendationError = (state: StateSchema) =>
    state.articleRecommendations?.error
