import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>
    ]
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    items: [
        {
            content: 'test content',
            value: 'test value'
        },
        {
            content: 'test content 2',
            value: 'test value 2'
        }
    ],
    value: 'value'
}
