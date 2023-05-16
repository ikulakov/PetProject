import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserInited } from '@/entities/User'
import { initAuthData } from '@/entities/User'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'
import { AppRouter } from './providers/router'

const App = () => {
    const dispatch = useAppDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if (!inited) {
        return <PageLoader />
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div className={classNames('App', {}, [])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="page-content">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div className={classNames('App_redisigned', {}, [])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            sidebar={<Sidebar />}
                            content={<AppRouter />}
                            toolbar={<>123</>}
                        />
                    </Suspense>
                </div>
            }
        />
    )
}

export default App
