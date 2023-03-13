import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { Navbar } from 'widgets/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, User, userActions } from 'entites/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const App: React.FC = () => {
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
        if (user) {
            const userData = JSON.parse(user) as User
            dispatch(userActions.initAuthData(userData))
        }
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
