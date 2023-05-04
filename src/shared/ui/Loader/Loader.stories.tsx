import { StoryFn, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof Loader>

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />

export const Normal = Template.bind({})
Normal.args = {}

