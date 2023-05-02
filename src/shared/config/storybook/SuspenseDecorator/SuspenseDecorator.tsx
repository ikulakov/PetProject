import { Suspense } from 'react'
import { type Story } from '@storybook/react'

export const SuspenseDecorator = (ComponentStory: Story) => (
    <Suspense>
        <ComponentStory />
    </Suspense>
)
