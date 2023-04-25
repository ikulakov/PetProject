import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { memo, useState } from 'react'
import { Popover } from 'shared/ui/Popups'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon, IconTheme } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'shared/ui/Notification'
import NotifyIcon from 'shared/assets/icons/bell.svg'
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice'
import { Drawer } from 'shared/ui/Drawer/Drawer'

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
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotifyIcon} theme={IconTheme.DARK} />
        </Button>
    )

    return (
        <>
            {isMobile 
                ? (
                    <>
                        {trigger}
                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList className={cls.notifications}/>
                        </Drawer>
                    </>
                )
                : (
                    <Popover 
                        direction='bottom left'
                        unmount={false}  // уведомления будут подгружаться даже при закрытом попапе, запросы идут сразу
                        className={classNames(cls.notificationButton, {}, [className])}
                        trigger={trigger}>
                        <NotificationList className={cls.notifications}/>
                    </Popover>
                )
            }
        </>

    )
})