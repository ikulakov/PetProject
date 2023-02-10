import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter: React.FC = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className='module-wrapper'>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
