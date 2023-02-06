import './styles/index.scss'
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('App', {hovered: true, selected: false}, [theme, 'cls2'])}>
            <Navbar />
            <button 
                onClick={toggleTheme}
            >
                Change Theme
            </button>
            <AppRouter />
        </div>
    );
};

export default App;