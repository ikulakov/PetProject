import { fetchProfileData, getProfileForm, getProfileError, getProfileIsLoading, getProfileReadonly, ProfileCard, profileReducer, profileActions, getProfileValidateErrors } from 'entites/Profile'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { memo, ReactNode, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Currency } from 'entites/Currency'
import { Country } from 'entites/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateProfileError } from 'entites/Profile/model/types/profile'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {
    children: ReactNode
}

const initialReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)
    const { t } = useTranslation('profile')
    const validateErrorsTranslates = {
        [ValidateProfileError.INCORRECT_AGE]: t('Введите корректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректно введены имя или фамилия'),
        [ValidateProfileError.NO_DATA]: t('Данных не получено'),
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера')
    }

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value ?? '' }))
    }, [dispatch])
    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
    }, [dispatch])
    const onChangeAge = useCallback((value?: string) => {
        const validateValue = value?.replace(/\D+/gm, '')
        dispatch(profileActions.updateProfile({ age: Number(validateValue) }))
    }, [dispatch])
    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value ?? '' }))
    }, [dispatch])
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
    }, [dispatch])
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value ?? '' }))
    }, [dispatch])
    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])
    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ProfilePageHeader />
            {validateErrors?.map((err) => (
                <Text theme={TextTheme.ERROR} text={validateErrorsTranslates[err]} key={err} />
            ))}
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
