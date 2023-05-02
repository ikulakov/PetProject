import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import { memo } from 'react'
import { type ArticleTextBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/Text/Text'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className,
        block
    } = props

    return (
        <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
        >
            {block.title &&
                <Text title={block.title} className={cls.title}/>
            }
            {block.paragraphs.map((p, index) => (
                <Text text={p} className={cls.paragraph} key={index} />
            ))}
        </div>
    )
})
