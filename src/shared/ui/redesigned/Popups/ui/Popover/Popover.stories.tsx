/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Popover } from './Popover'
import { Button } from '../../../Button'

export default {
    title: 'shared/redesigned/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Normal = Template.bind({})
Normal.args = {
    children: (
        <div>
            Anything content and button <Button>Button</Button>
        </div>
    ),
    direction: 'bottom right',
    trigger: 'Button',
}
