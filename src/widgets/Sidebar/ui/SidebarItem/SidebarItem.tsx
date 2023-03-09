import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemsType } from '../../model/items'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

interface SidebarItemProps {
    item: SidebarItemsType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed
    } = props

    const { t } = useTranslation()

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, []) }
        >
            <div className={cls.iconWrapper}>
                <item.Icon className={cls.icon} />
            </div>
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})
