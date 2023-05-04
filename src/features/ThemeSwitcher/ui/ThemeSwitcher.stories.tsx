import { StoryFn, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof ThemeSwitcher>

const Template: StoryFn<typeof ThemeSwitcher> = (args) => <div style={{backgroundColor: 'var(--primary-color)', padding: '10px'}}><ThemeSwitcher {...args} /></div>

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
