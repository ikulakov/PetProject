import { StoryFn, StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard'

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof RatingCard>

const Template: StoryFn<typeof RatingCard> = (args) => <RatingCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
    hasFeedback: true,
    feedbackTitle: 'popup title',
    title: 'title'
}
