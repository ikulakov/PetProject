import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

type ButtonVariant = 'clear' | 'outline' | 'filled'

type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    square?: boolean
    children: ReactNode
    addonLeft?: ReactNode
    addonRight?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        variant = 'outline',
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
