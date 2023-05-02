import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { RoutePath } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
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
        localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        dispatch(userActions.logout())
    }, [dispatch])

    if (!user) {
        return null
    }

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Админка'),
                        href: RoutePath.admin_panel
                    }]
                    : []
                ),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + user.id
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout
                }
            ]}
            trigger={<Avatar src={user.avatar} size={30}/>}
            direction={'bottom left'}
        />
    )
})