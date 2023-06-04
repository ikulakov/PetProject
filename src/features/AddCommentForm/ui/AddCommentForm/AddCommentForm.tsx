import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { HStack } from '@/shared/ui/redesigned/Stack'
import cls from './AddCommentForm.module.scss'
import { getAddCommentFormText } from '../../model/selectors/addCommentForm'
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentForm'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const text = useSelector(getAddCommentFormText)
    //  const error = useSelector(getAddCommentFormError)

    const onInputChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value))
        },
        [dispatch],
    )

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '')
        onInputChange('')
    }, [text, onSendComment, onInputChange])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        padding="24"
                        max
                    >
                        <HStack
                            className={classNames(
                                cls.AddCommentFormRedesigned,
                                {},
                                [className],
                            )}
                            data-testid="AddCommentForm"
                            justify="between"
                            max
                            gap="16"
                        >
                            <Input
                                value={text}
                                onChange={onInputChange}
                                data-testid="AddCommentForm.Input"
                                placeholder={t('Введите текст комментария')}
                            />
                            <Button
                                onClick={onSendCommentHandler}
                                data-testid="AddCommentForm.Button"
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>
                }
                off={
                    <div
                        className={classNames(cls.AddCommentForm, {}, [
                            className,
                        ])}
                        data-testid="AddCommentForm"
                    >
                        <InputDeprecated
                            value={text}
                            onChange={onInputChange}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            onClick={onSendCommentHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    )
}

export default memo(AddCommentForm)
