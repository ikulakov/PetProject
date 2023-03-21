import cls from './CommentList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentItem } from '../CommentItem/CommentItem'

interface CommentListProps {
    className?: string
    comments: Comment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props
    const { t } = useTranslation()

    return (
        <div
            className={classNames(cls.CommentList, {}, [className])}
        // eslint-disable-next-line i18next/no-literal-string
        >
            {comments.length
                ? comments.map(comment => (
                    <CommentItem
                        comment={comment}
                        isLoading={isLoading}
                        key={comment.id}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    )
})
