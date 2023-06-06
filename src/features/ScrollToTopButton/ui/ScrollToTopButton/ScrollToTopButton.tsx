import { memo, useCallback, useEffect, useState } from 'react'
import ArrowUp from '@/shared/assets/icons/arrow-up-circle.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ScrollToTopButtonProps {
    className?: string
    displayAfter?: number
}

export const ScrollToTopButton = memo(
    ({ className, displayAfter = 200 }: ScrollToTopButtonProps) => {
        const [showButton, setShowButton] = useState(false)

        const handleShowButton = useCallback(() => {
            if (!showButton && window.scrollY > displayAfter) {
                setShowButton(true)
            }
            if (showButton && window.scrollY <= displayAfter) {
                setShowButton(false)
            }
        }, [displayAfter, showButton])

        useEffect(() => {
            window.addEventListener('scroll', handleShowButton)
            return () => {
                window.removeEventListener('scroll', handleShowButton)
            }
        }, [handleShowButton])

        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        if (!showButton) {
            return null
        }
        return (
            <Icon
                Svg={ArrowUp}
                clickable
                onClick={handleClick}
                width={32}
                height={32}
                className={className}
            />
        )
    },
)
