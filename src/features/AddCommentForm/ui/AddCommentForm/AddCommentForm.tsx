import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import cls from './AddCommentForm.module.scss'
import { getAddCommentFormText } from '../../model/selectors/addCommentForm'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentForm'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
        onSendComment
    } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const text = useSelector(getAddCommentFormText)
    //  const error = useSelector(getAddCommentFormError)

    const onInputChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '')
        onInputChange('')
    }, [text, onSendComment, onInputChange])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    value={text}
                    onChange={onInputChange}
                />
                <Button
                    onClick={onSendCommentHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(AddCommentForm)
