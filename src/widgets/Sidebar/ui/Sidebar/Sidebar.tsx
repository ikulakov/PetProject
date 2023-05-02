import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'
import cls from './Sidebar.module.scss'
import ArrowCollapseIcon from '../../assets/chevrons-right.svg'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import type { SidebarItemsType } from '../../model/types/sidebar'
import { SidebarItem } from '../SidebarItem/SidebarItem'

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
            <VStack gap='32' className={cls.items} role={'navigation'}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </VStack>
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
