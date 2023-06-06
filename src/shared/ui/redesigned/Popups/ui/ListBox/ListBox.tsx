import { Fragment, type ReactNode, memo, useMemo } from 'react'
import { Listbox as HListbox } from '@headlessui/react'
import ArrowIcon from '@/shared/assets/icons/chevron.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { HStack } from '../../../../redesigned/Stack'
import { Button } from '../../../Button'
import { Icon } from '../../../Icon'
import { DropdownDirection, mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

export interface ListBoxItem<T extends string> {
    value: T
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    className?: string
    items?: ListBoxItem<T>[]
    value?: T
    defaultValue?: string
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
    onChange?: (value: T) => void
}

const typedMemo: <T>(c: T) => T = memo

export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        value,
        defaultValue,
        readonly,
        label,
        direction = 'bottom right',
        onChange,
    } = props

    const selectedItem = useMemo(() => {
        return items?.find((el) => el.value === value)
    }, [items, value])

    return (
        <HStack gap="16">
            {label && <span className={cls.label}>{label}</span>}
            <HListbox
                disabled={readonly}
                as={'div'}
                value={value}
                onChange={onChange}
                className={popupCls.popup}
            >
                <HListbox.Button
                    as={Button}
                    className={popupCls.trigger}
                    // disabled={readonly}
                    variant="filled"
                    addonRight={
                        <Icon
                            Svg={ArrowIcon}
                            className={cls.iconList}
                        />
                    }
                >
                    {selectedItem?.content ?? defaultValue}
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, [
                        mapDirectionClass[direction],
                    ])}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                            [cls.selected]: selected,
                                        },
                                        [className],
                                    )}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    )
})
