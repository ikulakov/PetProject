import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
    ArticleSortField,
    ArticleType,
    ArticleView,
    articleListSliceActions,
    fetchArticlesList,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { SortOrder } from '@/shared/types/sort'

export function useArticleFilters() {
    const dispatch = useAppDispatch()
    const order = useSelector(getArticlesPageOrder)
    const sort = useSelector(getArticlesPageSort)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)
    const view = useSelector(getArticlesPageView)

    const [searchParams, setSearchParams] = useSearchParams()

    const fetchData = useCallback(() => {
        dispatch(
            fetchArticlesList({
                replace: true,
            }),
        )
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articleListSliceActions.setOrder(order))
            dispatch(articleListSliceActions.setPage(1))
            fetchData()

            searchParams.set('order', order)
            setSearchParams(searchParams)
        },
        [dispatch, fetchData, searchParams, setSearchParams],
    )

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articleListSliceActions.setSort(sort))
            dispatch(articleListSliceActions.setPage(1))
            fetchData()

            searchParams.set('sort', sort)
            setSearchParams(searchParams)
        },
        [dispatch, fetchData, searchParams, setSearchParams],
    )

    const onChangeSearch = useCallback(
        (query: string) => {
            dispatch(articleListSliceActions.setSearch(query))
            dispatch(articleListSliceActions.setPage(1))
            debouncedFetchData()

            searchParams.set('q', query)
            setSearchParams(searchParams)
        },
        [dispatch, debouncedFetchData, searchParams, setSearchParams],
    )

    const onChangeTab = useCallback(
        (value: ArticleType) => {
            dispatch(articleListSliceActions.setType(value))
            dispatch(articleListSliceActions.setPage(1))
            fetchData()

            searchParams.set('type', value)
            setSearchParams(searchParams)
        },
        [dispatch, fetchData, searchParams, setSearchParams],
    )

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articleListSliceActions.setView(view))
        },
        [dispatch],
    )

    return {
        order,
        sort,
        search,
        type,
        view,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeTab,
        onChangeView,
    }
}
