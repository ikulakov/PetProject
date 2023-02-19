import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { LangSwitcher, ThemeSwitcher } from 'features/ThemeSwitcher'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            <div className={cls.widgets}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>{t('About')}</AppLink>
            </div>
        </div>
    )
}

export default Navbar
