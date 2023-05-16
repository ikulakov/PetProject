import { memo } from 'react'
import { ArticleView } from '@/entities/Article'
import GridIcon from '@/shared/assets/icons/grid.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/deprecated/Icon'
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
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    onClick={onClick(viewType.view)}
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(
                            '',
                            { [cls.selected]: viewType.view === view },
                            [],
                        )}
                        width={'24px'}
                        height={'24px'}
                    />
                </Button>
            ))}
        </div>
    )
})
