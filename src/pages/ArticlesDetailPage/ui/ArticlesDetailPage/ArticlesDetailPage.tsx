import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { articleDetailsPageRecommendationReducer } from '@/entities/Article'
import { articleDetailCommentsReducer } from '@/features/ArticleCommentList'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import cls from './ArticlesDetailPage.module.scss'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticlesDetailPageHeader } from '../ArticlesDetailPageHeader/ArticlesDetailPageHeader'

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
            <Page
                className={classNames(cls.articlesDetailPage, {}, [className])}
            >
                <ArticlesDetailPageHeader />
                <ArticleDetails id={articleId} />
                <ArticleRating id={articleId} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={articleId} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailPage)
