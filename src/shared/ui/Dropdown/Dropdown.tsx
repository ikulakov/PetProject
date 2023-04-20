import { Fragment, type ReactNode, memo } from 'react'
import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right'

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger?: ReactNode
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom left'
    } = props

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.items, {}, [
                mapDirectionClass[direction]
            ]) }>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type='button'
                            className={classNames(cls.item, { [cls.active]: active }, [])}
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
