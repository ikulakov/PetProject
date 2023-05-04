import { Suspense } from 'react'
import { StoryFn } from '@storybook/react'

export const SuspenseDecorator = (ComponentStory: StoryFn) => (
    <Suspense>
        <ComponentStory />
    </Suspense>
)
