import { StoryFn, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../Text/Text'

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof Card>

const Template: StoryFn<typeof Card> = (args) => <Card { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    children: <Text title='Текст' />
}
