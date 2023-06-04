import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Input } from '@/shared/ui/redesigned/Input'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { StarRating } from '@/shared/ui/redesigned/StarRating'
import { Text } from '@/shared/ui/redesigned/Text'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    rate?: number
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate = 0,
    } = props
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')
    const isMobile = useDevice()

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount)
            if (hasFeedback) {
                setIsModalOpen(true)
            } else {
                onAccept?.(selectedStarsCount)
            }
        },
        [hasFeedback, onAccept],
    )

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
        />
    )
    const content = (
        <>
            <VStack
                align="center"
                gap="8"
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            title={starsCount ? t('Спасибо за оценку!') : title}
                        />
                    }
                    off={
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку!') : title}
                        />
                    }
                />

                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            {!isMobile ? (
                <Modal
                    isOpen={isModalOpen}
                    lazy
                >
                    <VStack
                        max
                        gap="32"
                    >
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack
                                    max
                                    gap="16"
                                    justify="end"
                                >
                                    <Button
                                        onClick={cancelHandle}
                                        data-testid="RatingCard.Close"
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        onClick={acceptHandle}
                                        variant="filled"
                                        data-testid="RatingCard.Send"
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack
                                    max
                                    gap="16"
                                    justify="end"
                                >
                                    <ButtonDeprecated
                                        onClick={cancelHandle}
                                        data-testid="RatingCard.Close"
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        onClick={acceptHandle}
                                        theme={ButtonTheme.BACKGOUND_INVERTED}
                                        data-testid="RatingCard.Send"
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            ) : (
                <Drawer
                    isOpen={isModalOpen}
                    lazy
                    onClose={cancelHandle}
                >
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button
                                    onClick={acceptHandle}
                                    size="large"
                                    data-testid="RatingCard.Send"
                                >
                                    {t('Отправить')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    onClick={acceptHandle}
                                    size={ButtonSize.LARGE}
                                    data-testid="RatingCard.Send"
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            )}
        </>
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={className}
                    data-testid="RatingCard"
                    padding="24"
                    max
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    className={className}
                    data-testid="RatingCard"
                >
                    {content}
                </CardDeprecated>
            }
        />
    )
})
