import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('App', {hovered: true, selected: false}, [theme, 'cls2'])}>

            <Link to={'/'} >Main</Link>
            <Link to={'/about'}>About</Link>
            <button 
                onClick={toggleTheme}
            >
                Change Theme
            </button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;