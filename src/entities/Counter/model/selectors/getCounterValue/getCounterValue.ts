import { StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/lib/store/buildSelector'

// export const getCounterValue = createSelector(
//     getCounter,
//     (counter: CounterSchema) => counter.value
// )

export const [useCounterValue, getCounterValue] = buildSelector(
    (state: StateSchema) => state.counter.value,
)
