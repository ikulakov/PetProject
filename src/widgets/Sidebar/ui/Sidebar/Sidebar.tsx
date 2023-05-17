import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import ArrowCollapseIcon from '@/shared/assets/icons/chevron.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import cls from './Sidebar.module.scss'
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
        setCollapsed((prev) => !prev)
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <VStack
                        gap="32"
                        className={cls.items}
                        role={'navigation'}
                    >
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
            }
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        className={cls.appLogo}
                        size={collapsed ? 30 : 50}
                    />
                    <VStack
                        gap="32"
                        className={cls.items}
                        role={'navigation'}
                    >
                        {sidebarItemsList.map((item) => (
                            <SidebarItem
                                item={item}
                                collapsed={collapsed}
                                key={item.path}
                            />
                        ))}
                    </VStack>
                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.toggle}
                        Svg={ArrowCollapseIcon}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher />
                    </div>
                </aside>
            }
        />
    )
})
