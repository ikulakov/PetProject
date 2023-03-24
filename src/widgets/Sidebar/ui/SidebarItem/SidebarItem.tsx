import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Icon, IconTheme } from 'shared/ui/Icon/Icon'
import { SidebarItemsType } from '../../model/types/sidebar'

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
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, []) }
        >
            <div className={cls.iconWrapper}>
                <Icon
                    Svg={item.Icon}
                    className={cls.icon}
                    theme={IconTheme.DARK}
                />
            </div>
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
})
