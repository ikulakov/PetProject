import { createSelector } from '@reduxjs/toolkit'
import { type CounterSchema } from '../../type/CounterSchema'
import { getCounter } from '../getCounter/getCounter'

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)
