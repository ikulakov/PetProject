import { Fragment, type ReactNode, memo } from 'react'
import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
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
    const {
        className,
        items,
        trigger,
        direction = 'bottom left'
    } = props

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.items, {}, [mapDirectionClass[direction]]) }>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type='button'
                            className={classNames(cls.item, { [popupCls.active]: active }, [])}
                            disabled={item.disabled}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    )
                    if (item.href) {
                        return (
                            <Menu.Item disabled={item.disabled} key={index} as={AppLink} to={item.href}>
                                { content }
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item as={Fragment}>
                            { content }
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
)
