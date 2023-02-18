import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

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
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('Burger')}
            </Button>
        </div>
    )
}
