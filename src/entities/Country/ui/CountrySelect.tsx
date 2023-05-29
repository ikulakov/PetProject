import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { Country } from '../model/types/country'

interface CountrySelectProps {
    className?: string
    value?: Country
    readonly?: boolean
    onChange?: (value: Country) => void
}

const countryOptions = Object.entries(Country).map((val) => ({
    value: val[0],
    content: val[1],
}))

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, readonly, onChange } = props
    const { t } = useTranslation()

    const onChangeCountrySelect = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange],
    )

    const listProps = {
        value,
        readonly,
        items: countryOptions,
        label: t('Укажите страну'),
        defaultValue: t('Укажите страну'),
        className,
        onChange: onChangeCountrySelect,
        direction: 'top right' as const,
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ListBoxDeprecated {...listProps} />}
            on={<ListBox {...listProps} />}
        />
    )
})
