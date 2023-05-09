import { lazy } from 'react'

export const AboutPageAsync = lazy(
    async () => await import(/* webpackChunkName: "about_page"*/ './AboutPage'),
)
