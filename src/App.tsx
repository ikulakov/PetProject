import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { useTheme } from './hooks/useTheme';
import { classNames } from './helpers/classNames/classNames';

const MainPageAsync = lazy(() => import('./pages/MainPage/MainPage'))
const AboutPageAsync = lazy(() => import('./pages/AboutPage/AboutPage'))

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('App', {hovered: true, selected: false}, [theme, 'cls2'])}>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'}>About</Link>
            <button onClick={toggleTheme}>Change Theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route index element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;