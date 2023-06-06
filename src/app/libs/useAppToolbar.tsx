import { ReactElement } from 'react'
import { AppRoutes } from '@/shared/const/router'
import { useRouteChange } from '@/shared/lib/router/useRouteChange'
import { ScrollToolbar } from '@/widgets/ScrollToolbar'

export function useAppToolbar() {
    const appRoute = useRouteChange()

    const toolbarByAppRoute: Record<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <></>,
        [AppRoutes.SETTINGS]: <></>,
        [AppRoutes.ABOUT]: <></>,
        [AppRoutes.PROFILE]: <></>,
        [AppRoutes.ARTICLE_CREATE]: <></>,
        [AppRoutes.ARTICLE_EDIT]: <></>,
        [AppRoutes.ADMIN_PANEL]: <></>,
        [AppRoutes.FORBIDDEN]: <></>,
        [AppRoutes.NOT_FOUND]: <></>,
    }

    return toolbarByAppRoute[appRoute]
}
