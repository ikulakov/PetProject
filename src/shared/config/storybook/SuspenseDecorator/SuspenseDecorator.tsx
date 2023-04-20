import { type Story } from '@storybook/react'
import { Suspense } from 'react'

export const SuspenseDecorator = (ComponentStory: Story) => (
    <Suspense>
        <ComponentStory />
    </Suspense>
)
