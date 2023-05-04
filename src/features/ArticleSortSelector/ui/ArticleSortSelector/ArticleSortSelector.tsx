import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleSortField } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type SortOrder } from '@/shared/types/sort'
import { Select, type SelectOption } from '@/shared/ui/Select'
import cls from './ArticleSortSelector.module.scss'


interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeSort: (newSort: ArticleSortField) => void
    onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder
    } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
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
            className={classNames(cls.ArticleSortSelector, {}, [className])}
        >
            <Select
                label={t('Сортировать по')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
            <Select
                label={t('по')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
                className={cls.sort}
            />
        </div>
    )
})
