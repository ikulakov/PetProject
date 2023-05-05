import { memo } from 'react'
import { getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import cls from './CommentItem.module.scss'
import { type Comment } from '../../model/types/comment'


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
            <div className={classNames(cls.CommentItem, {}, [className])} data-testid="CommentItem.Loading">
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
        <div className={classNames(cls.CommentItem, {}, [className])} data-testid="CommentItem.Content">
            <AppLink
                to={ getRouteProfile(comment.user.id) }
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
