import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { articleDetailsPageRecommendationReducer } from '@/entities/Article'
import { articleDetailCommentsReducer } from '@/features/ArticleCommentList'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/deprecated/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Page } from '@/widgets/Page'
import cls from './ArticlesDetailPage.module.scss'
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticlesDetailPageHeader } from '../ArticlesDetailPageHeader/ArticlesDetailPageHeader'
import { DetailsContainer } from '../DetailsContainer/DetailsContainer'

interface ArticlesDetailPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailCommentsReducer,
    articleRecommendations: articleDetailsPageRecommendationReducer,
}

const ArticlesDetailPage = (props: ArticlesDetailPageProps) => {
    const { className } = props
    const { t } = useTranslation('article_details')
    const { id: articleId } = useParams<{ id: string }>()

    useEffect(() => {
        window.scroll({ top: 0 })
    }, [])

    if (!articleId) {
        return (
            <Page
                className={classNames(cls.articlesDetailPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </Page>
        )
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        content={
                            <Page
                                className={classNames(
                                    cls.articlesDetailPage,
                                    {},
                                    [className],
                                )}
                            >
                                <VStack
                                    gap="16"
                                    max
                                >
                                    <DetailsContainer />
                                    {/* <ArticleDetails id={articleId} /> */}
                                    <ArticleRating id={articleId} />
                                    <ArticleRecommendationsList />
                                    <ArticleDetailsComments id={articleId} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page
                        className={classNames(cls.articlesDetailPage, {}, [
                            className,
                        ])}
                    >
                        <ArticlesDetailPageHeader />
                        <ArticleDetails id={articleId} />
                        <ToggleFeatures
                            feature="isArticleRatingEnabled"
                            on={<ArticleRating id={articleId} />}
                            off={
                                <Card>{t('Оценка статей скоро появится')}</Card>
                            }
                        />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={articleId} />
                    </Page>
                }
            />
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailPage)
