import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> // переопределение дефолтных типов

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => [
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        onChange?.(e.target.value)
    ]
    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const onFocusHandler = () => {
        setIsFocused(true)
    }
    const onBlurHandler = () => {
        setIsFocused(false)
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && !isFocused && !value &&
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            }
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                className={cls.Input}
                ref={ref}
                {...otherProps}
            />
        </div>
    )
})
