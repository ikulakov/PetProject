import {
    type ButtonHTMLAttributes,
    type ReactNode,
    forwardRef,
    ForwardedRef,
} from 'react'
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
    disabled?: boolean
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            children,
            className,
            variant = 'outline',
            color = 'normal',
            size = 'small',
            square,
            addonLeft,
            addonRight,
            disabled,
            ...rest
        } = props

        return (
            <button
                type="button"
                ref={ref}
                className={classNames(cls.Button, { [cls.square]: square }, [
                    className,
                    cls[variant],
                    cls[color],
                    cls[size],
                ])}
                disabled={disabled}
                {...rest}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        )
    },
)
