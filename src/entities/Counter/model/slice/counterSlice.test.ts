import { counterReducer } from './counterSlice'
import { counterActions } from '../../model/slice/counterSlice'
import { type CounterSchema } from '../type/CounterSchema'

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        })
    })
    test('increment', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        })
    })
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        })
    })
})
