import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { LangSwitcher, ThemeSwitcher } from 'features/ThemeSwitcher'

interface NavbarProps {
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <div
            className={classNames(cls.Navbar, {}, [className])}
            data-testid="navbar"
        >
            <div className={cls.widgets}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default Navbar
