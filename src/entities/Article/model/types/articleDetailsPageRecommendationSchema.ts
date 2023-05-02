import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from './article'

export interface ArticleDetailsPageRecommendationSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
}
