import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: React.FC = memo(() => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t('О нас')}</h1>
            {t('Контент на странице о нас')}
        </div>
    )
})

export default AboutPage
