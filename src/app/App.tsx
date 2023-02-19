import './styles/index.scss'
import { classNames } from '../shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'

const App: React.FC = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames('App', { }, [theme])}>
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
