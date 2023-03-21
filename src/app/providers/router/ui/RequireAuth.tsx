import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entites/User'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig'

export function RequireAuth ({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    return children
}