import { lazy } from 'react'

export const ForbiddenPageAsync = lazy(
    async () =>
        await import(/* webpackChunkName: "forbidden_page"*/ './ForbiddenPage'),
)
