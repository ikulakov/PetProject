import { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entites/User'

const AppRouter: React.FC = () => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false
            }

            return true
        })
    }, [isAuth])

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className='module-wrapper'>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
