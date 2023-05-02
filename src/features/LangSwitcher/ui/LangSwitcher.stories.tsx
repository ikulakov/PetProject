import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { LangSwitcher } from './LangSwitcher'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = (args) => <div style={{backgroundColor: 'gray', padding: '10px'}}><LangSwitcher {...args} /></div>

export const Light = Template.bind({})
Light.args = {}
Light.decorators = []

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
