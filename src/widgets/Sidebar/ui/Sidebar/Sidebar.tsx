import cls from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import ArrowCollapseIcon from '../../assets/chevrons-right.svg'
import { SidebarItemsType } from '../../model/types/sidebar'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList: SidebarItemsType[] = useSelector(getSidebarItems)
    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>

            <nav className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </nav>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.toggle}
                size={ButtonSize.LARGE}
                theme={ButtonTheme.BACKGOUND_INVERTED}
                square
            >
                <ArrowCollapseIcon />
            </Button>
        </aside>
    )
})
