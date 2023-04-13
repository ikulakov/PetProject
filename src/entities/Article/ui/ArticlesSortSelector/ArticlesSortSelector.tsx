import cls from './ArticlesSortSelector.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'

interface ArticlesSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeSort: (newSort: ArticleSortField) => void
    onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
    const {
        className,
        onChangeSort,
        onChangeOrder
    } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        }
    ], [t])

    return (
        <div
            className={classNames(cls.ArticlesSortSelector, {}, [className])}
        >
            <Select
                label={t('Сортировать по')}
                options={orderOptions}
                onChange={onChangeOrder}
            />
            <Select
                label={t('по')}
                options={sortFieldOptions}
                onChange={onChangeSort}
                className={cls.sort}
            />
        </div>
    )
})