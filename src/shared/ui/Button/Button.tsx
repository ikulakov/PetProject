import React, { type ButtonHTMLAttributes } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export const enum ButtonTheme {
    CLEAR = 'clear',
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
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, className, theme, size = ButtonSize.SMALL, square, ...otherProps } = props

    return (
        <button
            className={classNames(cls.Button, { [cls.square]: square }, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
