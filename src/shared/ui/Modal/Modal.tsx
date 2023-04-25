import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ReactNode, useEffect, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { Overlay } from 'shared/ui/Overlay/Overlay'

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
        // return () => {
        //     setIsMounted(false)
        // }
    }, [isOpen])

    if (lazy && !isMounted) {
        return null
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, { [cls.opened]: isOpen }, [className])} >
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
