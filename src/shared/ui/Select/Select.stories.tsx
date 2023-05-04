import { StoryFn, StoryObj } from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof Select>

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Label',
    options: [
        { value: 'Первый пункт', content: 'Первый пункт' },
        { value: 'Второй пункт', content: 'Второй пункт' }
    ]
}
