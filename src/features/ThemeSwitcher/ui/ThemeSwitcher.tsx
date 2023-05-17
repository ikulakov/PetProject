import { memo, useCallback } from 'react'
import { saveJsonSettings } from '@/entities/User'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button/Button'
import { Icon } from '@/shared/ui/redesigned/Icon'
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
                dispatch(saveJsonSettings({ theme: newTheme }))
            })
        }, [dispatch, toggleTheme])

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <ButtonDeprecated
                        onClick={toggleThemeHandler}
                        className={classNames('', {}, [className])}
                        theme={ButtonTheme.CLEAR}
                    >
                        {theme === Theme.DARK ? (
                            <DarkIcon
                                style={{ stroke: '#ffc107' }}
                                width={'24px'}
                                height={'24px'}
                            />
                        ) : (
                            <LightIcon
                                style={{ stroke: '#98afba' }}
                                width={'24px'}
                                height={'24px'}
                            />
                        )}
                    </ButtonDeprecated>
                }
                on={
                    <Icon
                        Svg={theme === Theme.DARK ? DarkIcon : LightIcon}
                        className={classNames('', {}, [className])}
                        onClick={toggleThemeHandler}
                        width={'24px'}
                        height={'24px'}
                        clickable
                    />
                }
            />
        )
    },
)
