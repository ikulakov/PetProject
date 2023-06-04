import { type HTMLAttributes, type ReactNode, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

type CardVariant = 'normal' | 'outlined' | 'light'
type CardPaddings = '0' | '8' | '16' | '24'
type CardBorder = 'round-lg' | 'round-xs'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    variant?: CardVariant
    max?: boolean
    padding?: CardPaddings
    border?: CardBorder
    fullHeight?: boolean
}

const mapPaddingsToClass: Record<CardPaddings, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        padding = '8',
        border = 'normal',
        max,
        fullHeight,
        ...otherProps
    } = props

    const paddingClass = mapPaddingsToClass[padding]

    return (
        <div
            className={classNames(
                cls.Card,
                { [cls.max]: max, [cls.fullHeight]: fullHeight },
                [className, cls[variant], cls[paddingClass], cls[border]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    )
})
