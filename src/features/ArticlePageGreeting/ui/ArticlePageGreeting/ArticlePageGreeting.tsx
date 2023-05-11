import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/Drawer'
import { Modal } from '@/shared/ui/Modal'
import { Text } from '@/shared/ui/Text'

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation()
    const isMobile = useDevice()
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const { articlesPageHasBeenOpen } = useJsonSettings()

    useEffect(() => {
        if (!articlesPageHasBeenOpen) {
            setIsOpen(true)
            dispatch(
                saveJsonSettings({
                    articlesPageHasBeenOpen: true,
                }),
            )
        }
    }, [articlesPageHasBeenOpen, dispatch])

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Здесь вы можете искать и просматривать статьи на различные темы',
            )}
        />
    )

    if (isMobile) {
        return (
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                {text}
            </Drawer>
        )
    }
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            {text}
        </Modal>
    )
})
