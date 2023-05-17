import { type ReactNode, useEffect, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Overlay } from '../../redesigned/Overlay/Overlay'
import { Portal } from '../../redesigned/Portal/Portal'

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose?: () => void
    lazy?: boolean
}

/**
 * Устарел используем новый компонент из папки designed
 * @deprecated
 */

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props

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
            <div
                className={classNames(cls.Modal, { [cls.opened]: isOpen }, [
                    className,
                ])}
            >
                <Overlay onClick={onClose} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
}
