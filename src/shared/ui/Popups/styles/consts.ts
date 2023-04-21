import cls from './popup.module.scss'

export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right'

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight
}