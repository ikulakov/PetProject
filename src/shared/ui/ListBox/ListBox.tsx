import { Fragment, type ReactNode, memo } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack'

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

type ListBoxDirection = 'top' | 'bottom'

interface ListBoxProps {
    className?: string
    items?: ListBoxItem[]
    value?: string
    defaultValue?: string
    readonly?: boolean
    direction?: ListBoxDirection
    label?: string
    onChange?: <T extends string>(value: T) => void
}

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        readonly,
        label,
        direction = 'bottom',
        onChange
    } = props

    return (
        <HStack gap='16'>
            {label && <span className={cls.label}>{label}</span>}
            <HListbox
                disabled={readonly}
                as={'div'}
                value={value}
                onChange={onChange}
            >
                <HStack className={cls.ListBox} >
                    <HListbox.Button className={cls.trigger}>
                        <Button disabled={readonly}>
                            {value ?? defaultValue}
                        </Button>
                    </HListbox.Button>
                    <HListbox.Options className={classNames(cls.options, {}, [cls[direction]])}>
                        { items?.map((item) => (
                            <HListbox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {({ active, selected }) => (
                                    <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled }, [className])}>
                                        {selected && '>'}
                                        {item.content}
                                    </li>

                                )}
                            </HListbox.Option>

                        )) }
                    </HListbox.Options>
                </HStack>
            </HListbox>
        </HStack>
    )
})
