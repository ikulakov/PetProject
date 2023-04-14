import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileActions } from 'entities/Profile/model/slice/profileSlice'
import { useCallback } from 'react'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className
    } = props

    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadonly)

    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])
    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack
            justify='between'
            max
            className={classNames('', {}, [className])}
        >
            <Text title={t('Профиль')} />
            {canEdit && (
                readonly
                    ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <HStack gap='8'>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.BACKGOUND_INVERTED}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )
            )
            }
        </HStack>
    )
}
