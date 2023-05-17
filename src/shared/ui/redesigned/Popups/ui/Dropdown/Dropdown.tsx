import { Fragment, type ReactNode, memo } from 'react'
import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Dropdown.module.scss'
import { DropdownDirection, mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger?: ReactNode
    direction?: DropdownDirection
}

export const Dropdown = memo((props: DropdownProps) => {
    const { className, items, trigger, direction = 'bottom left' } = props

    return (
        <Menu
            as={'div'}
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items
                className={classNames(cls.items, {}, [
                    mapDirectionClass[direction],
                ])}
            >
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active },
                                [],
                            )}
                            disabled={item.disabled}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    )
                    if (item.href) {
                        return (
                            <Menu.Item
                                disabled={item.disabled}
                                key={`dropdown-key-${index}`}
                                as={Link}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item
                            as={Fragment}
                            key={`dropdown-key-${index}`}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
})
