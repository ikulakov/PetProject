import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import ListIcon from '../../../../shared/assets/icons/list.svg'
import GridIcon from '../../../../shared/assets/icons/grid.svg'
import { ArticleView } from 'entities/Article'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes: Array<{ view: ArticleView, icon: React.FunctionComponent<React.SVGAttributes<SVGElement>> }> = [
    {
        view: 'list',
        icon: ListIcon
    },
    {
        view: 'grid',
        icon: GridIcon
    }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick
    } = props

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView)
        }
    }

    return (
        <div
            className={classNames(cls.ArticleViewSelector, {}, [className])}
        >
            {
                viewTypes.map(viewType => (
                    <Button
                        onClick={onClick(viewType.view)}
                        theme={ButtonTheme.CLEAR}
                        key={viewType.view}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames('', { [cls.selected]: viewType.view === view }, [])}
                        />
                    </Button>
                ))
            }
        </div>
    )
})
