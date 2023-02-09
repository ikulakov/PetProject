import cls from './Sidebar.module.scss'
import { classNames } from '../../../shared/lib/classNames/classNames'
import { useState } from 'react'
import Button from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>
                Burger
            </Button>
        </div>
    )
}

export default Sidebar
