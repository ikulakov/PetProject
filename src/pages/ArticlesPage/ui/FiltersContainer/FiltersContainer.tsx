import { memo } from 'react'
import { ArticlesFilters } from '@/widgets/ArticlesFilters'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

interface FiltersContainerProps {
    className?: string
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props

    const {
        order,
        sort,
        search,
        type,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeTab,
    } = useArticleFilters()

    return (
        <ArticlesFilters
            order={order}
            sort={sort}
            search={search}
            type={type}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            onChangeTab={onChangeTab}
            className={className}
        />
    )
})
