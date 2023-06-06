import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserInited } from '@/entities/User'
import { initAuthData } from '@/entities/User'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'
import { useAppToolbar } from './libs/useAppToolbar'
import { AppRouter } from './providers/router'

const App = () => {
    const dispatch = useAppDispatch()
    const inited = useSelector(getUserInited)
    const toolbar = useAppToolbar()

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('App_redisigned', {}, [])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
                off={<PageLoader />}
            />
        )
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    id="app"
                    className={classNames('App', {}, [])}
                >
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
                <div
                    id="app"
                    className={classNames('App_redisigned', {}, [])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            sidebar={<Sidebar />}
                            content={<AppRouter />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
        />
    )
}

export default App
