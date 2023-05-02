import { RatingCard } from '@/entities/Rating'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi'

export interface ProfileRatingProps {
    className?: string
    id: string
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const {
        className,
        id: profileId
    } = props
    const { t } = useTranslation()

    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useGetProfileRating({
        profileId, 
        userId: userData?.id ?? ''
    })

    const [rateProfileMutation] = useRateProfile()

    const handleRateProfile = useCallback((rate: number, feedback?: string) => {
        try {
            rateProfileMutation({
                profileId,
                userId: userData?.id ?? '',
                rate,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [profileId, rateProfileMutation, userData?.id])

    const onCancel = useCallback((rate: number) => {
        handleRateProfile(rate)
    }, [handleRateProfile])

    const onAccept = useCallback((rate: number, feedback?: string) => {
        handleRateProfile(rate, feedback)
    }, [handleRateProfile])

    
    if (userData?.id === profileId) {
        return null
    }

    if (isLoading) {
        return <Skeleton width={'100%'} height={120} />
    }
    const rating = data?.[0]
    
    return (
        <RatingCard
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв о текущем пользователе')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ProfileRating