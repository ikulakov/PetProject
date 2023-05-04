import { StoryFn, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../../../Button'

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    items: [
        {
            content: 'test content',
            href: 'test link'
        }
    ],
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>Menu</Button>,
    direction: 'bottom right'
}
