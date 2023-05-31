import { lazy } from 'react'

export const SettingsPageAsync = lazy(
    async () =>
        await import(/* webpackChunkName: "settings page"*/ './SettingsPage'),
)
