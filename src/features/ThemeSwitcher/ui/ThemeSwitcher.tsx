import { memo, useCallback } from 'react'
import { saveJsonSettings } from '@/entities/User'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import DarkIcon from '../assets/icons/theme-dark.svg'
import LightIcon from '../assets/icons/theme-light.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(
    ({ className }) => {
        const { theme, toggleTheme } = useTheme()
        const dispatch = useAppDispatch()

        const toggleThemeHandler = useCallback(() => {
            toggleTheme((newTheme) => {
                console.log('Тема сменилась на ' + newTheme)
                dispatch(saveJsonSettings({ theme: newTheme }))
            })
        }, [dispatch, toggleTheme])

        return (
            <Button
                onClick={toggleThemeHandler}
                className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
            >
                {theme === Theme.DARK ? (
                    <DarkIcon style={{ stroke: '#ffc107' }} />
                ) : (
                    <LightIcon style={{ stroke: '#98afba' }} />
                )}
            </Button>
        )
    },
)
