import { Profile } from 'entities/Profile'

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    error?: string
    isLoading: boolean
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}
