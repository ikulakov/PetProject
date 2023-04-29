import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '@/shared/ui/Button/Button'

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    items: [
        {
            content: 'test content',
            href: 'test link'
        }
    ],
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Trigger button</Button>,
    direction: 'bottom right'
}
