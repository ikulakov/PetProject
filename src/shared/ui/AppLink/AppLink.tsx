import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

const AppLink: React.FC<AppLinkProps> = ({
        to, 
        children, 
        theme = AppLinkTheme.PRIMARY, 
        className, 
        ...otherProps
    }) => {
    return (
        <Link 
            {...otherProps}
            to={to} 
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};

export default AppLink;