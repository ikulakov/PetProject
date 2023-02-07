import './styles/index.scss'
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('App', {hovered: true, selected: false}, [theme, 'cls2'])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;