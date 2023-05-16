import { ReactNode, memo } from 'react'
import { Popover as HPopover } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Popover.module.scss'
import { DropdownDirection, mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
    className?: string
    trigger?: ReactNode
    direction?: DropdownDirection
    children: ReactNode
    unmount?: boolean
}

/**
 * Устарел используем новый компонент из папки designed
 * @deprecated
 */

export const Popover = memo((props: PopoverProps) => {
    const {
        className,
        trigger,
        children,
        unmount = true,
        direction = 'bottom right',
    } = props

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button
                as={'div'}
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, [
                    mapDirectionClass[direction],
                ])}
                unmount={unmount}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    )
})
