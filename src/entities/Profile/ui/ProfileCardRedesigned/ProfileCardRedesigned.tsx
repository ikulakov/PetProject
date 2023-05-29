import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import cls from './ProfileCardRedesigned.module.scss'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card
            padding="24"
            max
        >
            <HStack
                max
                justify="center"
            >
                <Skeleton
                    border={'100%'}
                    width={120}
                    height={120}
                    className={cls.profileAvatar}
                />
            </HStack>
            <HStack
                gap="24"
                max
            >
                <VStack
                    gap="16"
                    max
                >
                    <Skeleton
                        width={'100%'}
                        height={'38px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'38px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'38px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'38px'}
                    />
                </VStack>
                <VStack
                    gap="16"
                    max
                >
                    <Skeleton
                        width={'100%'}
                        height={'38px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'38px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'38px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'38px'}
                    />
                </VStack>
            </HStack>
        </Card>
    )
}

export const ProfileCardRedesignedError = ({
    error,
    className,
}: {
    error?: string
    className?: string
}) => {
    const { t } = useTranslation()
    return (
        <HStack
            className={className}
            justify="center"
            max
        >
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профиля:') + error}
                text={t('Попробуйте обновить страницу')}
            />
        </HStack>
    )
}

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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
        return <ProfileCardRedesignedSkeleton />
    }
    if (error) {
        return (
            <ProfileCardRedesignedError
                error={error}
                className={className}
            />
        )
    }

    return (
        <Card
            className={className}
            padding="24"
            max
        >
            {data?.avatar && (
                <HStack
                    justify="center"
                    max
                >
                    <Avatar
                        src={data.avatar}
                        size={120}
                        className={cls.profileAvatar}
                    />
                </HStack>
            )}

            <HStack
                gap="24"
                max
            >
                <VStack
                    gap="16"
                    max
                >
                    <Input
                        value={data?.first}
                        placeholder={t('Ваше имя')}
                        label={t('Ваше имя')}
                        readonly={readonly}
                        onChange={onChangeFirstname}
                        data-testid="ProfileCard.firstname"
                    />
                    <Input
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        label={t('Ваша фамилия')}
                        readonly={readonly}
                        onChange={onChangeLastname}
                        data-testid="ProfileCard.lastname"
                    />
                    <Input
                        value={data?.age}
                        placeholder={t('Ваш возраст')}
                        label={t('Ваш возраст')}
                        readonly={readonly}
                        onChange={onChangeAge}
                    />
                    <Input
                        value={data?.city}
                        placeholder={t('Город')}
                        label={t('Город')}
                        readonly={readonly}
                        onChange={onChangeCity}
                    />
                </VStack>
                <VStack
                    gap="16"
                    max
                >
                    <Input
                        value={data?.username}
                        placeholder={t('Введите имя пользователя')}
                        label={t('Введите имя пользователя')}
                        readonly={readonly}
                        onChange={onChangeUsername}
                    />
                    <Input
                        value={data?.avatar}
                        placeholder={t('Введите ссылку на аватар')}
                        label={t('Введите ссылку на аватар')}
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
            </HStack>
        </Card>
    )
})
