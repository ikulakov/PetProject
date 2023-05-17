import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
    title: 'shared/redesigned/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    variant: 'clear',
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    variant: 'outline',
    size: 'small',
}

export const OutlineMedium = Template.bind({})
OutlineMedium.args = {
    children: 'Text',
    variant: 'outline',
    size: 'small',
}

export const OutlineLarge = Template.bind({})
OutlineLarge.args = {
    children: 'Text',
    variant: 'outline',
    size: 'small',
}
