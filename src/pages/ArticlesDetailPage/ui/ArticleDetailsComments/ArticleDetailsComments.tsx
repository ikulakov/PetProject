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
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

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
            <VStack
                className={classNames('', {}, [className])}
                gap="32"
                max
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={t('Комментарии')} />}
                    off={<TextDeprecated title={t('Комментарии')} />}
                />
                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList
                    comments={comments}
                    isLoading={isLoading}
                />
            </VStack>
        )
    },
)
