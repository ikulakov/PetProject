import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { ReactNode, memo, useCallback } from 'react'
import { Card } from 'shared/ui/Card/Card'

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick
    } = props

    const clickHandle = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab)
        }
    }, [onTabClick])

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                    theme={tab.value === value ? 'normal' : 'outlined'}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
})
