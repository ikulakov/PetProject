import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'

export interface ArticleRatingProps {
    className?: string
    id: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, id: articleId } = props
    const { t } = useTranslation()

    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    })

    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback(
        (rate: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    articleId,
                    userId: userData?.id ?? '',
                    rate,
                    feedback,
                })
            } catch (e) {
                console.log(e)
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    )

    const onCancel = useCallback(
        (rate: number) => {
            handleRateArticle(rate)
        },
        [handleRateArticle],
    )

    const onAccept = useCallback(
        (rate: number, feedback?: string) => {
            handleRateArticle(rate, feedback)
        },
        [handleRateArticle],
    )

    if (isLoading) {
        return (
            <Skeleton
                width={'100%'}
                height={120}
            />
        )
    }
    const rating = data?.[0]

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t(
                'ostavte-svoi-otzyv-o-state-eto-pomozhet-nam-uluchshit-kachestvo',
            )}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ArticleRating
