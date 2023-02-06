import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import AppLink, { AppLinkTheme } from '../../../shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;