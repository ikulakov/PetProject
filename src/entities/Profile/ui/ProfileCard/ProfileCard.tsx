import { type Country } from '@/entities/Country'
import { type Currency } from '@/entities/Currency'
import { ToggleFeatures } from '@/shared/lib/features'
import { type Profile } from '../../model/types/profile'
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated'
import { ProfileCardRedesigned } from '../ProfileCardRedesigned/ProfileCardRedesigned'

export interface ProfileCardProps {
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
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ProfileCardDeprecated {...props} />}
            on={<ProfileCardRedesigned {...props} />}
        />
    )
}
