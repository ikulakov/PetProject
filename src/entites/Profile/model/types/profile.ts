import { Country, Currency } from 'shared/const/common'

export interface Profile {
    first: string
    lasname: string
    age: string
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export interface ProfileSchema {
    data?: Profile
    error?: string
    isLoading: boolean
    readonly: boolean
}
