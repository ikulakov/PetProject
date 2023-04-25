import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig'
import { HStack } from 'shared/ui/Stack'
import { NotificationButton } from 'features/NotificationButton'
import { AvatarDropdown } from 'features/AvatarDropdown'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { NotificationList } from 'shared/ui/Notification'
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = memo(({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()
    const user = useSelector(getUserAuthData)
    const isMobile = useDevice()

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onToggleModal()
        }
    }, [onToggleModal])

    useEffect(() => {
        if (isAuthModal) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isAuthModal, onKeyDown])

    if (user) {
        return (
            <header
                className={classNames(cls.Navbar, {}, [className])}
                data-testid="navbar"
            >
                <Text className={cls.appName} title={t('Pet App')} theme={TextTheme.INVERTED} />
                <AppLink to={RoutePath.article_create} className={cls.createBtn}>
                    {t('Создать статью')}
                </AppLink>
                <HStack gap='16' className={cls.widgets}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        )
    }

    return (
        <header
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            <HStack gap='16' className={cls.widgets}>
                <ThemeSwitcher />
                <LangSwitcher />
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>{t('Войти')}</Button>
            </HStack>

            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />}
        </header>
    )
})
