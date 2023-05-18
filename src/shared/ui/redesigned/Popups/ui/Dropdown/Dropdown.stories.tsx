import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../../../Button'

export default {
    title: 'shared/redesigned/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
    items: [
        {
            content: 'test content',
            href: 'test link',
        },
    ],
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Menu</Button>,
    direction: 'bottom right',
}
