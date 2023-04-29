import { ArticleDetails } from '@/entities/Article'
import { articleDetailCommentsReducer } from '@/features/ArticleCommentList'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import cls from './ArticlesDetailPage.module.scss'
import { Page } from '@/widgets/Page/Page'
import { articleDetailsPageRecommendationReducer } from '@/entities/Article/model/slice/articleDetailsPageRecommendationSlice/articleDetailsPageRecommendation'
import { ArticlesDetailPageHeader } from '../ArticlesDetailPageHeader/ArticlesDetailPageHeader'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { ArticleDetailsComments } from '@/pages/ArticlesDetailPage/ui/ArticleDetailsComments/ArticleDetailsComments'

interface ArticlesDetailPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailCommentsReducer,
    articleRecommendations: articleDetailsPageRecommendationReducer
}

const ArticlesDetailPage = (props: ArticlesDetailPageProps) => {
    const { className } = props
    const { t } = useTranslation('article_details')
    const { id: articleId } = useParams<{ id: string }>()

    if (!articleId) {
        return (
            <Page className={classNames(cls.articlesDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.articlesDetailPage, {}, [className])}>
                <ArticlesDetailPageHeader />
                <ArticleDetails id={articleId} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={articleId} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailPage)
