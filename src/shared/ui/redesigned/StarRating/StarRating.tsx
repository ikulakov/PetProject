import { memo, useState } from 'react'
import StarIcon from '@/shared/assets/icons/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import cls from './StarRating.module.scss'
import { Icon as IconDeprecated } from '../../deprecated/Icon'
import { Icon } from '../Icon'

interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, selectedStars = 0, onSelect } = props
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.StarRatingRedesigned,
                    off: () => cls.StarRating,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(cls.starIcon, {
                        [cls.selected]: isSelected,
                        [cls.hovered]: currentStarsCount >= starNumber,
                    }),
                    Svg: StarIcon,
                    key: starNumber,
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onFocus: onLeave, // for mobile
                    onMouseEnter: onHover(starNumber),
                    onTouchStart: onHover(starNumber), // for mobile
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber,
                }

                return (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Icon
                                clickable={!isSelected}
                                {...commonProps}
                            />
                        }
                        off={<IconDeprecated {...commonProps} />}
                        key={starNumber}
                    />
                )
            })}
        </div>
    )
})
