import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig'
import HomeIcon from '../assets/home.svg'
import AboutIcon from '../assets/about.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>

            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <div className={cls.iconWrapper}>
                        <HomeIcon className={cls.icon} />
                    </div>
                    <span className={cls.link}>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <div className={cls.iconWrapper}>
                        <AboutIcon className={cls.icon} />
                    </div>
                    <span className={cls.link}>
                        {t('About')}
                    </span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.toggle}
                size={ButtonSize.MEDIUM}
                theme={ButtonTheme.BACKGOUND_INVERTED}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
        </div>
    )
}
