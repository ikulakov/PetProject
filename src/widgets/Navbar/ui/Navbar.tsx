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
                <div className={cls.widgets}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
                <div>
                    <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>{t('Выйти')}</Button>
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
