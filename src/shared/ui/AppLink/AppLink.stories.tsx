import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
}

export const Red = Template.bind({})
Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED
}
Red.decorators = [ThemeDecorator(Theme.DARK)]
