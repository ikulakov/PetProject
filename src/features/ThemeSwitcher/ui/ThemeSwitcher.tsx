import DarkIcon from '../assets/icons/theme-dark.svg'
import LightIcon from '../assets/icons/theme-light.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button'
import { memo } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Theme } from '@/shared/const/theme'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK
                ? <DarkIcon style={{ stroke: '#ffc107' }} />
                : <LightIcon style={{ stroke: '#98afba' }} />
            }
        </Button>
    )
})
