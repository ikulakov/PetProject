import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import cls from './ArticleListItemDeprecated/ArticleListItemDeprecated.module.scss'
import clsRedesigned from './ArticleListItemRedesigned/ArticleListItemRedesigned.module.scss'
import { type ArticleView } from '../../model/types/article'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props

        if (view === 'list') {
            return (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Card
                            className={classNames('', {}, [
                                className,
                                clsRedesigned[view],
                            ])}
                            padding="24"
                            max
                        >
                            <VStack
                                max
                                gap="16"
                            >
                                <HStack
                                    gap="8"
                                    max
                                >
                                    <Skeleton
                                        border="50%"
                                        height={32}
                                        width={32}
                                    />
                                    <Skeleton
                                        width={150}
                                        height={16}
                                    />
                                    <Skeleton
                                        width={150}
                                        height={16}
                                    />
                                </HStack>
                                <Skeleton
                                    width={250}
                                    height={30}
                                />
                                <Skeleton
                                    width={250}
                                    height={28}
                                />
                                <Skeleton height={425} />
                                <Skeleton
                                    height={40}
                                    width={200}
                                />
                            </VStack>
                        </Card>
                    }
                    off={
                        <div
                            className={classNames(cls.ArticleListItem, {}, [
                                className,
                                cls[view],
                            ])}
                        >
                            <CardDeprecated className={cls.card}>
                                <div className={cls.header}>
                                    <SkeletonDeprecated
                                        border="50%"
                                        height={30}
                                        width={30}
                                    />
                                    <SkeletonDeprecated
                                        width={150}
                                        height={16}
                                        className={cls.username}
                                    />
                                    <SkeletonDeprecated
                                        width={150}
                                        height={16}
                                        className={cls.date}
                                    />
                                </div>
                                <SkeletonDeprecated
                                    width={250}
                                    height={24}
                                    className={cls.title}
                                />
                                <SkeletonDeprecated
                                    height={200}
                                    className={cls.img}
                                />
                                <div className={cls.footer}>
                                    <SkeletonDeprecated
                                        height={36}
                                        width={200}
                                    />
                                </div>
                            </CardDeprecated>
                        </div>
                    }
                />
            )
        }

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames('', {}, [
                            className,
                            clsRedesigned[view],
                        ])}
                    >
                        <Card
                            className={clsRedesigned.card}
                            border="round-xs"
                            padding="0"
                        >
                            <Skeleton
                                width={'100%'}
                                height={140}
                                className={clsRedesigned.img}
                            />
                            <VStack
                                gap="4"
                                className={clsRedesigned.info}
                            >
                                <Skeleton
                                    width={150}
                                    height={20}
                                />
                                <VStack
                                    gap="8"
                                    max
                                    className={clsRedesigned.footer}
                                >
                                    <HStack
                                        max
                                        justify="between"
                                    >
                                        <Skeleton
                                            width={100}
                                            height={16}
                                        />
                                    </HStack>
                                    <HStack gap="4">
                                        <Skeleton
                                            width={120}
                                            height={16}
                                        />
                                    </HStack>
                                </VStack>
                            </VStack>
                        </Card>
                    </div>
                }
                off={
                    <div
                        className={classNames(cls.ArticleListItem, {}, [
                            className,
                            cls[view],
                        ])}
                    >
                        <CardDeprecated className={cls.card}>
                            <div className={cls.imageWrapper}>
                                <SkeletonDeprecated
                                    width={200}
                                    height={200}
                                    className={cls.img}
                                />
                            </div>
                            <div className={cls.infoWrapper}>
                                <SkeletonDeprecated
                                    width={130}
                                    height={16}
                                />
                            </div>
                            <SkeletonDeprecated
                                width={150}
                                height={16}
                                className={cls.title}
                            />
                        </CardDeprecated>
                    </div>
                }
            />
        )
    },
)
