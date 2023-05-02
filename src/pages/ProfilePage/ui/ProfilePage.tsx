import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { classNames } from '@/shared/lib/classNames/classNames'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { ProfileRating } from '@/features/ProfileRating'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id: prodileId } = useParams()

    if (!prodileId) {
        return null
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={prodileId} />
            <ProfileRating id={prodileId} />
        </Page>
    )
})

export default ProfilePage
