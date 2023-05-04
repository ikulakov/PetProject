/* eslint-disable fsd-architecture/layer-imports */
import { StoryFn } from '@storybook/react'
import '@/app/styles/index.scss'

export const StyleDecorator = (story: () => StoryFn) => story()
