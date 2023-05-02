import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from '@/shared/ui/Text'
import { Input } from '@/shared/ui/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from '@/shared/ui/Loader'
import { Avatar } from '@/shared/ui/Avatar'
import { CurrencySelect } from '../../../Currency/ui/CurrencySelect'
import { type Currency } from '@/entities/Currency'
import { CountrySelect } from '../../../Country/ui/CountrySelect'
import { type Country } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (val?: string) => void
    onChangeLastname?: (val?: string) => void
    onChangeAge?: (val?: string) => void
    onChangeCity?: (val?: string) => void
    onChangeAvatar?: (val?: string) => void
    onChangeUsername?: (val?: string) => void
    onChangeCurrency?: (currency?: Currency) => void
    onChangeCountry?: (country?: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
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
        onChangeCountry
    } = props
    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [className])}
                justify='center'
                max
            >
                <Loader />
            </HStack>
        )
    }
    if (error) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [className])}
                justify='center'
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
    return (
        <VStack
            className={classNames(cls.ProfileCard, {}, [className])}
            gap='32'
            max
        >
            {data?.avatar &&
                <HStack justify='center' max>
                    <Avatar
                        src={data.avatar}
                        size={180}
                    />
                </HStack>
            }
            <VStack gap='16' max>
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
    )
}
