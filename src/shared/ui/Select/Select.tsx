import cls from './Select.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

const typedMemo: <T>(c: T) => T = memo

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: string
    readonly?: boolean
    onChange?: (value: T) => void
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
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
            onChange(e.target.value as T)
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
