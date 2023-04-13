import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPageFilter.module.scss'
import { memo, useCallback } from 'react'
import { ArticleView, ArticleViewSelector, articleListSliceActions, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView, ArticleTypeTabs } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { Input } from 'shared/ui/Input/Input'
import { Card } from 'shared/ui/Card/Card'
import { useTranslation } from 'react-i18next'
import { ArticlesSortSelector } from 'entities/Article/ui/ArticlesSortSelector/ArticlesSortSelector'
import { SortOrder } from 'shared/types'
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article'
import { fetchArticlesList } from 'entities/Article/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { getArticlesPageType } from 'entities/Article/model/selectors/articlesPageSelectors'

interface ArticlesPageFilterProps {
    className?: string
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesPageView)
    const order = useSelector(getArticlesPageOrder)
    const sort = useSelector(getArticlesPageSort)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const [searchParams, setSearchParams] = useSearchParams()

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({
            replace: true
        }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articleListSliceActions.setView(view))
    }, [dispatch])

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articleListSliceActions.setOrder(order))
        dispatch(articleListSliceActions.setPage(1))
        fetchData()

        searchParams.set('order', order)
        setSearchParams(searchParams)
    }, [dispatch, fetchData, searchParams, setSearchParams])

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articleListSliceActions.setSort(sort))
        dispatch(articleListSliceActions.setPage(1))
        fetchData()

        searchParams.set('sort', sort)
        setSearchParams(searchParams)
    }, [dispatch, fetchData, searchParams, setSearchParams])

    const onChangeSearch = useCallback((query: string) => {
        dispatch(articleListSliceActions.setSearch(query))
        dispatch(articleListSliceActions.setPage(1))
        debouncedFetchData()

        searchParams.set('q', query)
        setSearchParams(searchParams)
    }, [dispatch, debouncedFetchData, searchParams, setSearchParams])

    const onChangeTab = useCallback((value: ArticleType) => {
        dispatch(articleListSliceActions.setType(value))
        dispatch(articleListSliceActions.setPage(1))
        fetchData()

        searchParams.set('type', value)
        setSearchParams(searchParams)
    }, [dispatch, fetchData, searchParams, setSearchParams])

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticlesSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeTab={onChangeTab}
                className={cls.tabs}
            />
        </div>
    )
})