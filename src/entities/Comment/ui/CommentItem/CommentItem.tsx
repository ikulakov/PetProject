import { memo } from 'react'
import { getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import cls from './CommentItem.module.scss'
import { type Comment } from '../../model/types/comment'

interface CommentItemProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
})

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentItem, {}, [className])}
                data-testid="CommentItem.Loading"
            >
                <div className={cls.header}>
                    <Skeleton
                        width={50}
                        height={50}
                        border={'50%'}
                    />
                    <Skeleton
                        width={100}
                        height={20}
                    />
                </div>
                <div>
                    <Skeleton
                        width={'100%'}
                        height={50}
                    />
                </div>
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    max
                    padding="24"
                >
                    <VStack
                        className={classNames(cls.CommentItemRedesigned, {}, [
                            className,
                        ])}
                        data-testid="CommentItem.Content"
                        gap="8"
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack gap="8">
                                {comment.user.avatar && (
                                    <Avatar
                                        size={32}
                                        src={comment.user.avatar}
                                    />
                                )}
                                <Text
                                    text={comment.user.username}
                                    bold
                                />
                            </HStack>
                        </AppLink>
                        <Text text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    className={classNames(cls.CommentItem, {}, [className])}
                    data-testid="CommentItem.Content"
                    max
                    gap="8"
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        {comment.user.avatar && (
                            <AvatarDeprecated
                                size={50}
                                src={comment.user.avatar}
                            />
                        )}
                        <TextDeprecated title={comment.user.username} />
                    </AppLinkDeprecated>
                    <div>
                        <TextDeprecated text={comment.text} />
                    </div>
                </VStack>
            }
        />
    )
})
