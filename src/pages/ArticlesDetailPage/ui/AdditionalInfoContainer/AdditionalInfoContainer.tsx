import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getArticleDetailsData } from '@/entities/Article'
import { getArticleDetailsIsLoading } from '@/entities/Article'
import { getRouteArticleEdit } from '@/shared/const/router'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import cls from './AdditionalInfoContainer.module.scss'

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData)
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const navigate = useNavigate()

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id))
        }
    }, [article, navigate])

    if (!article) {
        return null
    }
    return (
        <Card
            padding="24"
            className={cls.card}
        >
            {isLoading ? (
                <VStack gap="32">
                    <HStack gap="8">
                        <Skeleton
                            width={32}
                            height={32}
                            border={'50%'}
                        />
                        <Skeleton
                            width={60}
                            height={20}
                        />
                        <Skeleton
                            width={100}
                            height={20}
                        />
                    </HStack>
                    <Skeleton
                        width={120}
                        height={30}
                        border={'50%'}
                    />
                    <Skeleton
                        width={80}
                        height={20}
                    />
                </VStack>
            ) : (
                <ArticleAdditionalInfo
                    author={article?.user}
                    createdAt={article?.createdAt}
                    views={article?.views}
                    onEdit={onEditArticle}
                />
            )}
        </Card>
    )
})
