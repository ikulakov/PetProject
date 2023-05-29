import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Input } from '@/shared/ui/deprecated/Input'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import cls from './ProfileCard.module.scss'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            className={classNames(cls.ProfileCard, {}, [])}
            justify="center"
            max
        >
            <Loader />
        </HStack>
    )
}

export const ProfileCardDeprecatedError = ({
    error,
    className,
}: {
    error?: string
    className?: string
}) => {
    const { t } = useTranslation()
    return (
        <HStack
            className={classNames(cls.ProfileCard, {}, [className])}
            justify="center"
            max
        >
            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля:') + error}
                text={t('Попробуйте обновить страницу')}
            />
        </HStack>
    )
}

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props
    const { t } = useTranslation('profile')

    if (isLoading) {
        return <ProfileCardDeprecatedLoader />
    }
    if (error) {
        return (
            <ProfileCardDeprecatedError
                error={error}
                className={className}
            />
        )
    }

    return (
        <div className={classNames(cls.ProfileCardDeprecated, {}, [className])}>
            <VStack
                className={classNames(cls.ProfileCard, {}, [className])}
                gap="32"
                max
            >
                {data?.avatar && (
                    <HStack
                        justify="center"
                        max
                    >
                        <Avatar
                            src={data.avatar}
                            size={180}
                        />
                    </HStack>
                )}
                <VStack
                    gap="16"
                    max
                >
                    <Input
                        value={data?.first}
                        placeholder={t('Ваше имя')}
                        label={t('Ваше имя')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeFirstname}
                        data-testid="ProfileCard.firstname"
                    />
                    <Input
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        label={t('Ваша фамилия')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeLastname}
                        data-testid="ProfileCard.lastname"
                    />
                    <Input
                        value={data?.age}
                        placeholder={t('Ваш возраст')}
                        label={t('Ваш возраст')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeAge}
                    />
                    <Input
                        value={data?.city}
                        placeholder={t('Город')}
                        label={t('Город')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeCity}
                    />
                    <Input
                        value={data?.username}
                        placeholder={t('Введите имя пользователя')}
                        label={t('Введите имя пользователя')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeUsername}
                    />
                    <Input
                        value={data?.avatar}
                        placeholder={t('Введите ссылку на аватар')}
                        label={t('Введите ссылку на аватар')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeAvatar}
                    />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </VStack>
        </div>
    )
})
