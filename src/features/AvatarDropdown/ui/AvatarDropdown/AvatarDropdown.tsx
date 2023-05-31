import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import {
    getRouteAdmin,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import cls from './AvatarDropdown.module.scss'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const isAdmin = useSelector(isUserAdmin)
    const isManger = useSelector(isUserManager)
    const isAdminPanelAvailable = isAdmin || isManger
    const user = useSelector(getUserAuthData)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
        localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }, [dispatch])

    if (!user) {
        return null
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Профиль'),
            href: getRouteProfile(user.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ]

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <DropdownDeprecated
                    className={classNames(cls.AvatarDropdown, {}, [className])}
                    items={items}
                    trigger={
                        <AvatarDeprecated
                            src={user.avatar}
                            size={30}
                        />
                    }
                    direction={'bottom left'}
                />
            }
            on={
                <Dropdown
                    className={classNames(cls.AvatarDropdown, {}, [className])}
                    items={items}
                    trigger={
                        <Avatar
                            src={user.avatar}
                            size={40}
                        />
                    }
                    direction={'bottom left'}
                />
            }
        />
    )
})
