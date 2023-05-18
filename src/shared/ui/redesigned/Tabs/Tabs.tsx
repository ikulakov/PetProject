import { type ReactNode, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { Card } from '../Card/Card'
import { Flex, FlexDirection } from '../Stack/Flex/Flex'

export interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    direction?: FlexDirection
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, direction = 'row', onTabClick } = props

    const clickHandle = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab)
            }
        },
        [onTabClick],
    )

    return (
        <Flex
            className={classNames(cls.Tabs, {}, [className])}
            direction={direction}
            gap="8"
            align="start"
        >
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                    variant={tab.value === value ? 'light' : 'normal'}
                    border="round-lg"
                >
                    {tab.content}
                </Card>
            ))}
        </Flex>
    )
})
