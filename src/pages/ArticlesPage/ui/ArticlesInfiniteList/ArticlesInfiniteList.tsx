import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ArticlesList, getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, initArticlesPage } from '@/entities/Article'
import { getArticles } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextTheme } from '@/shared/ui/Text'

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
