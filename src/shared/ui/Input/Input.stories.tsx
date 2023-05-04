import { StoryFn, StoryObj } from '@storybook/react'
import { Input } from './Input'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof Input>

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Type text...',
    value: '123'
}
