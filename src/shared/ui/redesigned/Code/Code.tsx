import { useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import cls from './Code.module.scss'
import CopyIcon from './assets/copy.svg'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '../../deprecated/Button/Button'
import { Icon as IconDeprected, IconTheme } from '../../deprecated/Icon/Icon'
import { Icon } from '../Icon'

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <div className={cls.copyBtn}>
                        <Icon
                            Svg={CopyIcon}
                            clickable
                            onClick={onCopy}
                            width={24}
                            height={24}
                        />
                    </div>
                    <code>{code}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR}
                        className={cls.copyBtn}
                        onClick={onCopy}
                    >
                        <IconDeprected
                            Svg={CopyIcon}
                            theme={IconTheme.DARK}
                        />
                    </ButtonDeprecated>
                    <code>{code}</code>
                </pre>
            }
        />
    )
}
