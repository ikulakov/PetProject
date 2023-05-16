import { Suspense, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/AddCommentForm'
import {
    addCommentForArticle,
    fetchCommentsByArticleId,
    getArticleComments,
    getArticleCommentsIsLoading,
} from '@/features/ArticleCommentList'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text } from '@/shared/ui/deprecated/Text'

interface ArticleDetailsCommentsProps {
    className?: string
    id: string
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props
        const { t } = useTranslation()

        const comments = useSelector(getArticleComments.selectAll)
        const isLoading = useSelector(getArticleCommentsIsLoading)
        const dispatch = useAppDispatch()

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text))
            },
            [dispatch],
        )

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id))
        })

        return (
            <div className={classNames('', {}, [className])}>
                <Text title={t('Комментарии')} />
                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList
                    comments={comments}
                    isLoading={isLoading}
                />
            </div>
        )
    },
)
