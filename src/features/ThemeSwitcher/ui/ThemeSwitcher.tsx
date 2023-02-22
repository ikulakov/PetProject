import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from '../assets/icons/theme-dark.svg'
import LightIcon from '../assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div>
            <Button
                onClick={toggleTheme}
                className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
            >
                {theme === Theme.DARK
                    ? <DarkIcon transform='scale(0.7)' />
                    : <LightIcon transform='scale(0.7)' />
                }
            </Button>
        </div>
    )
}

export default ThemeSwitcher
