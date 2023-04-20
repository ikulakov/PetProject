import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article/model/types/article'

export interface ArticleDetailsPageRecommendationSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
}
