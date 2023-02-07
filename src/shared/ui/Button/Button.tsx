import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export const enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}

const Button: React.FC<ButtonProps> = (props) => {
    const {children, className, theme, ...otherProps} = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;