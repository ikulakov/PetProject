import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export const enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGOUND = 'background',
    BACKGOUND_INVERTED = 'backgroundInverted'
}

export const enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    square?: boolean
    children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.SMALL,
        square,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, { [cls.square]: square }, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    )
})
