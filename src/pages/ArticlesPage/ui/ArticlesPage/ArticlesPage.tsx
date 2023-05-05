import { memo, useCallback } from 'react'
import { articleListSliceReducer } from '@/entities/Article'
import { fetchNextArticlePage } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'
import cls from './ArticlesPage.module.scss'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articleListSliceReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <Page
                className={classNames(cls.articlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
                data-testid="ArticlesPage"
            >
                <ArticlesPageFilter />
                <ArticlesInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
