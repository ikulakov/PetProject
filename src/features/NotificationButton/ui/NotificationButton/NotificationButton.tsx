import { memo, useState } from 'react'
import { NotificationList } from '@/entities/Notification'
import NotifyIcon from '@/shared/assets/icons/bell.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Icon, IconTheme } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popups'
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
                            <NotificationList />
                        </Drawer>
                    </>
                )
                : (
                    <Popover 
                        direction='bottom left'
                        unmount={true}  // уведомления будут подгружаться даже при закрытом попапе, запросы идут сразу если false
                        className={classNames(cls.notificationButton, {}, [className])}
                        trigger={trigger}>
                        <NotificationList className={cls.notifications}/>
                    </Popover>
                )
            }
        </>

    )
})