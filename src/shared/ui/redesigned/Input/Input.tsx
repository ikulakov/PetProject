import {
    type InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
> // переопределение дефолтных типов

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean
    readonly?: boolean
    label?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        label,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

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
        <div
            className={classNames(
                cls.InputWrapper,
                { [cls.readonly]: readonly },
                [className],
            )}
        >
            {placeholder && !isFocused && !value && (
                <div className={cls.placeholder}>{placeholder}</div>
            )}
            {label && <span className={cls.label}>{label}</span>}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                className={cls.Input}
                ref={ref}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    )
})
