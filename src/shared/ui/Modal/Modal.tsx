import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import Portal from 'shared/ui/Portal/Portal'

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props

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

export default Modal
