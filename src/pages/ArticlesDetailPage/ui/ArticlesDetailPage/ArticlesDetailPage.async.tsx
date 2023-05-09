import { lazy } from 'react'

export const ArticlesDetailPageAsync = lazy(
    async () =>
        await import(
            /* webpackChunkName: "article_detail_page"*/ './ArticlesDetailPage'
        ),
)
