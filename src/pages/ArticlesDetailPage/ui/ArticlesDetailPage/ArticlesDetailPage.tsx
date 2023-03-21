import { ArticleDetails } from 'entites/Article'
import { CommentList } from 'entites/Comment'
import { articleDetailCommentsReducer, fetchCommentsByArticleId, getArticleComments, getArticleCommentsIsLoading } from 'features/ArticleCommentList'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Text } from 'shared/ui/Text/Text'
import cls from './ArticlesDetailPage.module.scss'
import { useInitialEffect } from '../../../../shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ArticlesDetailPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailCommentsReducer
}

const ArticlesDetailPage = (props: ArticlesDetailPageProps) => {
    const { className } = props
    const { t } = useTranslation('article_details')
    const { id: articleId } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId))
    })

    if (!articleId) {
        return (
            <div className={classNames(cls.articlesDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articlesDetailPage, {}, [className])}>
                <ArticleDetails id={articleId} />
                <Text title={t('Комментарии')} className={cls.commentTitle}/>
                <CommentList
                    comments={comments}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailPage)
