import { type HTMLAttributes, type ReactNode, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
}

type CardTheme = 'normal' | 'outlined'

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = 'normal',
        ...otherProps
    } = props

    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    )
})
