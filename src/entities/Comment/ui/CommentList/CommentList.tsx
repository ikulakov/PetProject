import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { type Comment } from '../../model/types/comment'
import { CommentItem } from '../CommentItem/CommentItem'

interface CommentListProps {
    className?: string
    comments: Comment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props

    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={className}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </div>
        )
    }

    return (
        <VStack
            className={className}
            gap="16"
            max
        >
            {comments.length ? (
                comments.map((comment) => (
                    <CommentItem
                        comment={comment}
                        isLoading={isLoading}
                        key={comment.id}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text text={t('Комментарии отсутствуют')} />}
                    off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
                />
            )}
        </VStack>
    )
})
