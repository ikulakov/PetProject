import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ReactNode, useEffect, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

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
            <div className={classNames(cls.Modal, { [cls.opened]: isOpen }, [className])} onClick={onClose}>
                <div className={cls.overlay}>
                    <div className={cls.content} onClick={e => { e.stopPropagation() }}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
