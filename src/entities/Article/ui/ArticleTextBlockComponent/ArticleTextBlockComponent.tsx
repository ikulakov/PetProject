import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import cls from './ArticleTextBlockComponent.module.scss'
import { type ArticleTextBlock } from '../../model/types/article'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Text
                                title={block.title}
                                className={cls.title}
                            />
                        }
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((p, index) => (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Text
                                text={p}
                                className={cls.paragraph}
                                key={index}
                            />
                        }
                        off={
                            <TextDeprecated
                                text={p}
                                className={cls.paragraph}
                                key={index}
                            />
                        }
                        key={index}
                    />
                ))}
            </div>
        )
    },
)
