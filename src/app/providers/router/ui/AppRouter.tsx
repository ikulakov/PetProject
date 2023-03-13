import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from '../routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter: React.FC = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        return <Route
            key={route.path}
            path={route.path}
            element={
                route.authOnly
                    ? <RequireAuth>
                        <div className='module-wrapper'>{route.element}</div>
                    </RequireAuth>
                    : <div className='module-wrapper'>{route.element}</div>
            }
        />
    }, [])

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
