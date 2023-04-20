import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (ComponentStory: Story) => (
    <BrowserRouter>
        <ComponentStory />
    </BrowserRouter>
)
