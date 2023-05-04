import { StoryObj, StoryFn } from '@storybook/react'
import { PageError } from './PageError'

export default {
    title: 'Widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof PageError>

const Template: StoryFn<typeof PageError> = (args) => <PageError {...args} />

export const Normal = Template.bind({})
Normal.args = {}
