import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = memo(({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()
    const user = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onToggleModal()
        }
    }, [onToggleModal])

    const onLogout = useCallback(() => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        dispatch(userActions.logout())
    }, [dispatch])

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
                <div className={cls.widgets}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
                <div>
                    <Dropdown
                        items={[
                            {
                                content: t('Профиль'),
                                href: RoutePath.profile + user.id
                            },
                            {
                                content: t('Выйти'),
                                onClick: onLogout
                            }
                        ]}
                        className={cls.dropdown}
                        trigger={<Avatar src={user.avatar} size={30}/>}
                        direction={'bottom left'}
                    />
                </div>
            </header>
        )
    }

    return (
        <header
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            <div className={cls.widgets}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <div>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>{t('Войти')}</Button>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />}
            </div>
        </header>
    )
})
