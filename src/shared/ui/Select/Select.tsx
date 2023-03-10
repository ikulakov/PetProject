import cls from './Select.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ChangeEvent, memo, useMemo } from 'react'

interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    readonly?: boolean
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange
    } = props

    const optionsList = useMemo(() => {
        return options?.map(option => (
            <option className={cls.option} value={option.value} key={option.value}>
                {option.content}
            </option>
        ))
    }, [options])

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    return (
        <div
            className={classNames(cls.wrapper, {}, [className])}
        >
            {label &&
                <span className={cls.label}>
                    {label}
                </span>
            }
            <select
                className={cls.Select}
                value={value}
                onChange={onChangeSelect}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    )
})
