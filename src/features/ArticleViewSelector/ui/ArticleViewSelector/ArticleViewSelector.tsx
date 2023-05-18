import { memo } from 'react'
import { ArticleView } from '@/entities/Article'
import GridIcon from '@/shared/assets/icons/grid.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { HStack } from '@/shared/ui/redesigned/Stack'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes: {
    view: ArticleView
    icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}[] = [
    {
        view: 'list',
        icon: ListIcon,
    },
    {
        view: 'grid',
        icon: GridIcon,
    },
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView)
        }
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            onClick={onClick(viewType.view)}
                            theme={ButtonTheme.CLEAR}
                            key={viewType.view}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                className={classNames(
                                    '',
                                    { [cls.selected]: viewType.view === view },
                                    [],
                                )}
                                width={'24px'}
                                height={'24px'}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
            on={
                <Card
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                    border="round-lg"
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view !== view,
                                })}
                                clickable
                                onClick={onClick(viewType.view)}
                                width={'24px'}
                                height={'24px'}
                                key={viewType.view}
                            />
                        ))}
                    </HStack>
                </Card>
            }
        />
    )
})
