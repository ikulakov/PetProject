import { memo, useState } from 'react'
import { NotificationList } from '@/entities/Notification'
import NotifyIcon from '@/shared/assets/icons/bell.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Icon as IconDeprecated, IconTheme } from '@/shared/ui/deprecated/Icon'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    const isMobile = useDevice()
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = () => {
        setIsOpen(true)
    }
    const onCloseDrawer = () => {
        setIsOpen(false)
    }
    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpenDrawer}
                >
                    <IconDeprecated
                        Svg={NotifyIcon}
                        theme={IconTheme.DARK}
                        width={'24px'}
                        height={'24px'}
                    />
                </ButtonDeprecated>
            }
            on={
                <Icon
                    Svg={NotifyIcon}
                    width={'24px'}
                    height={'24px'}
                    onClick={onOpenDrawer}
                    clickable
                />
            }
        />
    )

    return (
        <>
            {isMobile ? (
                <>
                    {trigger}
                    <Drawer
                        isOpen={isOpen}
                        onClose={onCloseDrawer}
                    >
                        <NotificationList />
                    </Drawer>
                </>
            ) : (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <PopoverDeprecated
                            direction="bottom left"
                            unmount={true} // уведомления будут подгружаться даже при закрытом попапе, запросы идут сразу если false
                            className={classNames(cls.notificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                    on={
                        <Popover
                            direction="bottom left"
                            unmount={true} // уведомления будут подгружаться даже при закрытом попапе, запросы идут сразу если false
                            className={classNames(cls.notificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                />
            )}
        </>
    )
})
