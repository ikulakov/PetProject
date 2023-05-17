import { type ReactNode, memo } from 'react'
import { type LinkProps } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { classNames } from '../../../lib/classNames/classNames'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
    children: ReactNode
    activeClassName?: string
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        children,
        variant = 'primary',
        className,
        activeClassName = '',
        ...otherProps
    } = props

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    )
})
