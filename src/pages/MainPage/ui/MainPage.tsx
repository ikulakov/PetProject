import { Counter } from 'entites/Counter'
import { useTranslation } from 'react-i18next'

const MainPage: React.FC = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t('Главная страница')}</h1>
            {t('Контент на главной')}
            <Counter />
        </div>
    )
}

export default MainPage
