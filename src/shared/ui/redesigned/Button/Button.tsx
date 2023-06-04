import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

type ButtonVariant = 'clear' | 'outline' | 'filled'
type ButtonColor = 'normal' | 'success' | 'error'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    square?: boolean
    children: ReactNode
    addonLeft?: ReactNode
    addonRight?: ReactNode
    color?: ButtonColor
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        variant = 'outline',
        color = 'normal',
        size = 'small',
        square,
        addonLeft,
        addonRight,
        ...rest
    } = props

    return (
        <button
            className={classNames(cls.Button, { [cls.square]: square }, [
                className,
                cls[variant],
                cls[color],
                cls[size],
            ])}
            {...rest}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    )
})
