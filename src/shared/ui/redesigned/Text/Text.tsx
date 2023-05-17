import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export type TextVariant = 'primary' | 'accent' | 'error'
export type TextAlign = 'left' | 'right' | 'center'
export type TextSize = 'size_m' | 'size_l'

interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize

    'data-testid'?: string
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'size_m',
        'data-testid': dataTestId = 'Text',
    } = props

    const additionalClasses = [className, cls[variant], cls[align], cls[size]]

    return (
        <div className={classNames(cls.Text, {}, additionalClasses)}>
            {title && (
                <p
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </p>
            )}
            {text && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    )
})
