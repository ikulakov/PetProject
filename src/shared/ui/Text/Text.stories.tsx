import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Some title',
    text: 'Some text'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'Some text'
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Some title'
}

export const Dark = Template.bind({})
Dark.args = {
    title: 'Some title',
    text: 'Some text'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'Some text'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Some title'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
    title: 'Some title',
    text: 'Some text',
    theme: TextTheme.ERROR
}

export const SizeL = Template.bind({})
SizeL.args = {
    title: 'Some title',
    text: 'Some text',
    size: TextSize.L
}
