/* eslint-disable fsd-architecture/layer-imports */
import { type Story } from '@storybook/react'
import '@/app/styles/index.scss'

export const StyleDecorator = (story: () => Story) => story()
