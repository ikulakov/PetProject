import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { LangSwitcher } from '@/features/LangSwitcher'
import { NotificationButton } from '@/features/NotificationButton'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { getRouteArticleCreate } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = memo(({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()
    const user = useSelector(getUserAuthData)

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.NavbarRedesigned,
        off: () => cls.Navbar,
    })

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onToggleModal()
            }
        },
        [onToggleModal],
    )

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
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <header
                        className={classNames(mainClass, {}, [className])}
                        data-testid="navbar"
                    >
                        <Text
                            className={cls.appName}
                            title={t('Pet App')}
                            theme={TextTheme.INVERTED}
                        />
                        <AppLink
                            to={getRouteArticleCreate()}
                            className={cls.createBtn}
                        >
                            {t('Создать статью')}
                        </AppLink>
                        <HStack
                            gap="16"
                            className={cls.widgets}
                        >
                            <ThemeSwitcher />
                            <LangSwitcher />
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                on={
                    <header
                        className={classNames(mainClass, {}, [className])}
                        data-testid="navbar"
                    >
                        <HStack
                            gap="16"
                            className={cls.widgets}
                        >
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        )
    }

    return (
        <header
            className={classNames(mainClass, {}, [className])}
            data-testid="navbar"
        >
            <HStack
                gap="16"
                className={cls.widgets}
            >
                <ThemeSwitcher />
                <LangSwitcher />
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Button
                            variant="clear"
                            onClick={onToggleModal}
                        >
                            {t('Войти')}
                        </Button>
                    }
                    off={
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR_INVERTED}
                            onClick={onToggleModal}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    }
                />
            </HStack>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onToggleModal}
                />
            )}
        </header>
    )
})
