import { Link, type LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { classNames } from '../../lib/classNames/classNames'
import { memo } from 'react'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = memo(({
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
    )
})
