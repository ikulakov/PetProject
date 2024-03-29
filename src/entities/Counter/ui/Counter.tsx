import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button } from '@/shared/ui/deprecated/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter = () => {
    // const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()

    // const increment = () => {
    //     dispatch(counterActions.increment())
    // }
    // const decrement = () => {
    //     dispatch(counterActions.decrement())
    // }

    const { decrement, increment, add } = useCounterActions()
    const handleInc = () => {
        increment()
    }
    const handleDec = () => {
        decrement()
    }
    const handleAddFive = () => {
        add(5)
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={handleInc}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleDec}
            >
                {t('decrement')}
            </Button>
            <Button
                onClick={handleAddFive}
                data-testid="increment-btn5"
            >
                {t('add5')}
            </Button>
        </div>
    )
}
