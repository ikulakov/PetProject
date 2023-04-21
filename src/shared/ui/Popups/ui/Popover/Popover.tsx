import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Popover.module.scss'
import { ReactNode, memo } from 'react'
import { Popover as HPopover } from '@headlessui/react'
import popupCls from '../../styles/popup.module.scss'
import { DropdownDirection, mapDirectionClass } from '../../styles/consts'

interface PopoverProps {
    className?: string
    trigger?: ReactNode
    direction?: DropdownDirection
    children: ReactNode
}

export const Popover = memo((props: PopoverProps) => {
    const { 
        className,
        trigger,
        children,
        direction = 'bottom right'
    } = props

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
})