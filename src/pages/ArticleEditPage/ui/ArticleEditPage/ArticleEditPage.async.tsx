import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(
    async () =>
        await import(
            /* webpackChunkName: "article_edit_page"*/ './ArticleEditPage'
        ),
)
