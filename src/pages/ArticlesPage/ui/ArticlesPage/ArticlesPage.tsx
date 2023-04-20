import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleListSliceReducer } from 'entities/Article/model/slice/articleListSlice/articleListSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlePage } from 'entities/Article/model/services/fetchNextArticlePage/fetchNextArticlePage'
import { ArticlesPageFilter } from 'pages/ArticlesPage/ui/ArticlesPageFilter/ArticlesPageFilter'
import { ArticlesInfiniteList } from 'pages/ArticlesPage/ui/ArticlesInfiniteList/ArticlesInfiniteList'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articleListSliceReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.articlesPage, {}, [className])} onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilter />
                <ArticlesInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
