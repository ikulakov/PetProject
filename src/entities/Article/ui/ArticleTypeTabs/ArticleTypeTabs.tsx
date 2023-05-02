import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type TabItem, Tabs } from '@/shared/ui/Tabs'
import { ArticleType } from '../../model/types/article'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeTab: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeTab } = props
    const { t } = useTranslation()

    const onClickTab = useCallback((tab: TabItem) => {
        onChangeTab(tab.value as ArticleType)
    }, [onChangeTab])

    const tabs = useMemo<TabItem[]>(() => [
        {
            content: t('Экономика'),
            value: ArticleType.ECONOMICS
        },
        {
            content: t('IT'),
            value: ArticleType.IT
        },
        {
            content: t('Наука'),
            value: ArticleType.SCIENCE
        },
        {
            content: t('Все'),
            value: ArticleType.ALL
        }
    ], [t])

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={tabs}
            onTabClick={onClickTab}
            value={value}
        />
    )
})
