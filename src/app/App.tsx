import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'

const App: React.FC = () => {
    return (
        <div className={classNames('App', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className='page-content'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
