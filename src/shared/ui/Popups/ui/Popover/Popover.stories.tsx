import { StoryFn, StoryObj } from '@storybook/react'
import { Popover } from './Popover'
import { Button } from '../../../Button'

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as StoryObj<typeof Popover>

const Template: StoryFn<typeof Popover> = (args) => <Popover { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <div>Anything content and button <Button>Button</Button></div>,
    direction: 'bottom right',
    trigger: 'Button'
}
