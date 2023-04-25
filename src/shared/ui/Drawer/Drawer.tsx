import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { ReactNode, memo } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { Overlay } from 'shared/ui/Overlay/Overlay'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const { 
        className,
        children,
        isOpen,
        onClose
    } = props

    return (
        <Portal>
            <div className={classNames(cls.Drawer, { [cls.opened]: isOpen }, [className, 'app_drawer'])}>
                <Overlay onClick={onClose}/>
                <div className={cls.content} >
                    {children}
                </div>
            </div>
        </Portal>
    )
})