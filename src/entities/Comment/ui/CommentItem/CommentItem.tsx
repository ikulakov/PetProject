import cls from './CommentItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { type Comment } from '../../model/types/comment'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Text } from '@/shared/ui/Text/Text'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/app/providers/router/routeConfig/routeConfig'

interface CommentItemProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentItem = memo((props: CommentItemProps) => {
    const {
        className,
        comment,
        isLoading
    } = props

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={50} height={50} border={'50%'} />
                    <Skeleton width={100} height={20} />
                </div>
                <div>
                    <Skeleton width={'100%'} height={50} />
                </div>
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls.header}
            >
                {comment.user.avatar &&
                    <Avatar size={50} src={comment.user.avatar}/>
                }
                <Text title={comment.user.username} />
            </AppLink>
            <div>
                <Text text={comment.text} />
            </div>
        </div>
    )
})
