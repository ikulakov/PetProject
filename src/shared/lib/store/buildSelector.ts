import { useSelector } from 'react-redux'
import { StateSchema } from '@/app/providers/StoreProvider'

type Selector<T> = (state: StateSchema) => T
type Result<T> = [() => T, Selector<T>]

// Хук, который позволяет делать выборку из стейта без использования useSelector

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => {
        return useSelector(selector)
    }

    return [useSelectorHook, selector]
}
