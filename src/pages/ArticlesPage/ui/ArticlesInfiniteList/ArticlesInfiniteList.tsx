import { memo } from 'react'
import { ArticlesList, getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, initArticlesPage } from '@/entities/Article'
import { useSelector } from 'react-redux'
import { getArticles } from '@/entities/Article/model/slice/articleListSlice/articleListSlice'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSearchParams } from 'react-router-dom'
import { Text, TextTheme } from '@/shared/ui/Text/Text'

interface ArticlesInfiniteListProps {
    className?: string
}

export const ArticlesInfiniteList = memo((props: ArticlesInfiniteListProps) => {
    const { className } = props
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView)
    const error = useSelector(getArticlesPageError)
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    if (error) {
        return <Text text={error} theme={TextTheme.ERROR} />
    }

    return (
        <ArticlesList
            articles={articles}
            view={view}
            isLoading={isLoading}
            className={className}
        />
    )
})
