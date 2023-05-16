import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { Icon, IconTheme } from '@/shared/ui/deprecated/Icon'
import cls from './SidebarItem.module.scss'
import { type SidebarItemsType } from '../../model/types/sidebar'

interface SidebarItemProps {
    item: SidebarItemsType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props

    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <div className={cls.iconWrapper}>
                <Icon
                    Svg={item.Icon}
                    className={cls.icon}
                    theme={IconTheme.DARK}
                    width={'24px'}
                    height={'24px'}
                />
            </div>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    )
})
