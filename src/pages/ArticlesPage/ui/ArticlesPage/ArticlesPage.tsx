import { memo, useCallback } from 'react'
import { articleListSliceReducer } from '@/entities/Article'
import { fetchNextArticlePage } from '@/entities/Article'
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'
import cls from './ArticlesPage.module.scss'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter'
import { FiltersContainer } from '../FiltersContainer/FiltersContainer'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'

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

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    content={
                        <Page
                            className={classNames(
                                cls.articlesPageRedesigned,
                                {},
                                [className],
                            )}
                            onScrollEnd={onLoadNextPart}
                            data-testid="ArticlesPage"
                        >
                            <ArticlesInfiniteList className={cls.list} />
                            <ArticlePageGreeting />
                        </Page>
                    }
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                />
            }
            off={
                <Page
                    className={classNames(cls.articlesPage, {}, [className])}
                    onScrollEnd={onLoadNextPart}
                    data-testid="ArticlesPage"
                >
                    <ArticlesPageFilter />
                    <ArticlesInfiniteList className={cls.list} />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    )

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            {content}
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
