import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'
import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props
    const { id } = useParams()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.articleEditPage, {}, [className])}>
            {isEdit ? 'Edit' : 'Create'}
        </Page>
    )
})

export default ArticleEditPage
