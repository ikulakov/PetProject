import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { Navbar } from '@/widgets/Navbar'
import { useSelector } from 'react-redux'
import { getUserInited, type User, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

const App = () => {
    const dispatch = useAppDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        let userData: User | undefined
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
        if (user) {
            userData = JSON.parse(user)
        }
        dispatch(userActions.initAuthData(userData))
    }, [dispatch])

    return (
        <div className={classNames('App', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className='page-content'>
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}

export default App
