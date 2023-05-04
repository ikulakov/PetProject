import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

interface AdminPanelPageProps {
    className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { t } = useTranslation('admin')

    return (
        <Page data-testid='AdminPanelPage'>
            {t('Админ панель')}
        </Page>
    )
}

export default memo(AdminPanelPage)
