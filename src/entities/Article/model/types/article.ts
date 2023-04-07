import { EntityState } from '@reduxjs/toolkit'
import { User } from 'entities/User'

export type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'CODE'
    code: string
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'TEXT'
    title: string
    paragraphs: string[]
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'IMAGE'
    src: string
    title?: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export type ArticleView = 'list' | 'grid'

export interface Article {
    id: string
    user: User
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}

export interface ArticleDetailsSchema {
    data?: Article
    isLoading: boolean
    error?: string
}

export interface ArticleListSchema extends EntityState<Article> {
    isLoading: boolean
    error?: string

    view: ArticleView
    page: number
    limit?: number
    hasMore: boolean

    _inited: boolean
}
