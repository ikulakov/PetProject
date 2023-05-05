import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { ProfileRating } from '@/features/ProfileRating'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id: prodileId } = useParams()

    if (!prodileId) {
        return null
    }
    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ProfilePage"
        >
            <EditableProfileCard id={prodileId} />
            <ProfileRating id={prodileId} />
        </Page>
    )
})

export default ProfilePage
