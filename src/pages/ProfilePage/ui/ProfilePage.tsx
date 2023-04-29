import { memo } from 'react'
import { Page } from '@/widgets/Page/Page'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/Text/Text'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id: prodileId } = useParams()
    const { t } = useTranslation()

    if (!prodileId) {
        return <Text title={t('Id не передан')} />
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap='32'>
                <EditableProfileCard id={prodileId} />
            </VStack>
        </Page>
    )
})

export default ProfilePage
