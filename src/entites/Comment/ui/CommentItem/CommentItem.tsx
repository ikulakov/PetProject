import cls from './CommentItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentItemProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentItem = memo((props: CommentItemProps) => {
    const {
        className,
        comment,
        isLoading
    } = props
    // const { t } = useTranslation()

    if (isLoading) {
        //! не выполняется
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

    return (
        <div
            className={classNames(cls.CommentItem, {}, [className])}
        // eslint-disable-next-line i18next/no-literal-string
        >
            <div className={cls.header}>
                {comment.user.avatar && <Avatar size={50} src={comment.user.avatar}/>}
                <Text title={comment.user.username} size={TextSize.M} />
            </div>
            <div>
                <Text text={comment.text} />
            </div>
        </div>
    )
})
