import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AboutPage = memo(() => {
    const { t } = useTranslation()
    return (
        <Page data-testid="AboutPage">
            <h1>{t('О нас')}</h1>
            {t('Контент на странице о нас')}
        </Page>
    )
})

export default AboutPage
