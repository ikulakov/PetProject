import { ArticleView, ArticleViewSelector, ArticlesList } from 'entities/Article'
import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleListSliceActions, articleListSliceReducer, getArticles } from 'entities/Article/model/slice/articleListSlice/articleListSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from 'entities/Article/model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from 'entities/Article/model/selectors/articlesPageSelectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articleListSliceReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView)
    const error = useSelector(getArticlesPageError)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articleListSliceActions.setView(view))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articleListSliceActions.InitialState())
    })

    if (error) {
        //
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.articlesPage, {}, [className])}>
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticlesList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
