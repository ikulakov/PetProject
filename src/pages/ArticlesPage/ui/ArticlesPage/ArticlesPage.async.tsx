import { lazy } from 'react'

export const ArticlesPageAsync = lazy(
    async () =>
        await import(/* webpackChunkName: "articles_page"*/ './ArticlesPage'),
)
