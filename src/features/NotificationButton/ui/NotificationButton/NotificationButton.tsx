import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { memo } from 'react'
import { Popover } from 'shared/ui/Popups'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon, IconTheme } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'shared/ui/Notification'
import NotifyIcon from 'shared/assets/icons/bell.svg'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props

    return (
        <Popover 
            direction='bottom left'
            className={classNames(cls.notificationButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotifyIcon} theme={IconTheme.DARK} />
                </Button>
            )}>
            <NotificationList className={cls.notifications}/>
        </Popover>
    )
})