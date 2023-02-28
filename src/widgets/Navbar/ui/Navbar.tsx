import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { LangSwitcher, ThemeSwitcher } from 'features/ThemeSwitcher'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Modal from 'shared/ui/Modal/Modal'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

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

    return (
        <div
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            <div className={cls.widgets}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <div>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>{t('Войти')}</Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>{t('Контент для модалки')}</Modal>
            </div>
        </div>
    )
}

export default Navbar
