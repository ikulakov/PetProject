import { action } from '@storybook/addon-actions'
import { StoryFn, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof Tabs>

const Template: StoryFn<typeof Tabs> = (args) => <Tabs { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    tabs: [
        {
            content: 'tab1',
            value: 'tab1'
        },
        {
            content: 'tab2',
            value: 'tab2'
        },
        {
            content: 'tab3',
            value: 'tab3'
        }
    ],
    value: 'tab2',
    onTabClick: action('onTabClick')
}
