import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Card } from '@/shared/ui/deprecated/Card'
import { Text } from '@/shared/ui/deprecated/Text'
import cls from './NotificationItem.module.scss'
import { Notification } from '../../model/types/notifications'

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props
    const content = (
        <Card
            className={classNames(cls.notificationItem, {}, [className])}
            theme={'outlined'}
        >
            <Text
                title={item.title}
                text={item.description}
            />
        </Card>
    )

    if (item.href) {
        return (
            <AppLink
                to={item.href}
                target="_blank"
                rel={'noreferrer'}
                className={cls.link}
            >
                {content}
            </AppLink>
        )
    }

    return <>{content}</>
})
