import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = (args) => <div style={{backgroundColor: 'var(--primary-color)', padding: '10px'}}><LangSwitcher {...args} /></div>

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = []
