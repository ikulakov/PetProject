import { Counter } from 'entites/Counter'
import { useTranslation } from 'react-i18next'

const AboutPage: React.FC = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t('О нас')}</h1>
            {t('Контент на странице о нас')}
            <Counter />
        </div>
    )
}

export default AboutPage
