import {
    type InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
    ReactNode,
} from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
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
    addonLeft?: ReactNode
    addonRight?: ReactNode
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
        addonLeft,
        addonRight,
        ...rest
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

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                className={cls.Input}
                ref={ref}
                readOnly={readonly}
                placeholder={placeholder}
                {...rest}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    )
})
