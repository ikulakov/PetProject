import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'shared/Avatar',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Label',
    options: [
        { value: 'Первый пункт', content: 'Первый пункт' },
        { value: 'Второй пункт', content: 'Второй пункт' }
    ]
}
