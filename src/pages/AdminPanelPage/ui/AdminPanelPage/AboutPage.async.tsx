import { lazy } from 'react'

export const AdminPanelPageAsync = lazy(
    async () =>
        await import(
            /* webpackChunkName: "admin_panel_page"*/ './AdminPanelPage'
        ),
)
