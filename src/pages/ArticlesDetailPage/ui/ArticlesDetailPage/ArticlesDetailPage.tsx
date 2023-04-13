import { ArticleDetails, ArticlesList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { addCommentForArticle, articleDetailCommentsReducer, fetchCommentsByArticleId, getArticleComments, getArticleCommentsIsLoading } from 'features/ArticleCommentList'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Text, TextSize } from 'shared/ui/Text/Text'
import cls from './ArticlesDetailPage.module.scss'
import { useInitialEffect } from '../../../../shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddCommentForm } from 'features/AddCommentForm'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { articleDetailsPageRecommendationReducer, getArticleRecommendations } from 'entities/Article/model/slice/articleDetailsPageRecommendationSlice/articleDetailsPageRecommendation'
import { getArticleDetailsRecommendationIsLoading } from '../../../../entities/Article/model/selectors/articleRecommendations'
import { fetchArticlesRecommendations } from 'entities/Article/model/services/fetchArticlesRecommendations/fetchArticlesRecommendations'

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
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)

    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationIsLoading)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId))
        dispatch(fetchArticlesRecommendations())
    })

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
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onBackToList}
                >
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={articleId} />

                <Text title={t('Рекоммендуем')} size={TextSize.L} />
                <ArticlesList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target='_blank'
                />

                <Text title={t('Комментарии')} className={cls.commentTitle}/>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailPage)
