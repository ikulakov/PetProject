import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.SMALL
}

export const OutlineMedium = Template.bind({})
OutlineMedium.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.MEDIUM
}

export const OutlineLarge = Template.bind({})
OutlineLarge.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.LARGE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGOUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGOUND_INVERTED
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Text',
    disabled: true,
    theme: ButtonTheme.BACKGOUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGOUND_INVERTED,
    square: true,
    size: ButtonSize.SMALL
}

export const SquareMedium = Template.bind({})
SquareMedium.args = {
    children: '>',
    theme: ButtonTheme.BACKGOUND_INVERTED,
    square: true,
    size: ButtonSize.MEDIUM
}

export const SquareLarge = Template.bind({})
SquareLarge.args = {
    children: '>',
    theme: ButtonTheme.BACKGOUND_INVERTED,
    square: true,
    size: ButtonSize.LARGE
}
