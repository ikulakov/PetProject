import { useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import CopyIcon from './assets/copy.svg'
import { Button, ButtonTheme } from '../Button/Button'
import { Icon, IconTheme } from '../Icon/Icon'

interface CodeProps {
    className?: string
    code: string
}

export const Code = (props: CodeProps) => {
    const { className, code } = props
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code)
    }, [code])
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.copyBtn}
                onClick={onCopy}
            >
                <Icon
                    Svg={CopyIcon}
                    theme={IconTheme.DARK}
                />
            </Button>
            <code>{code}</code>
        </pre>
    )
}
