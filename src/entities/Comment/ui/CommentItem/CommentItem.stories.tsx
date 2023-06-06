import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { CommentItem } from './CommentItem'

export default {
    title: 'entities/Comment/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>

const Template: ComponentStory<typeof CommentItem> = (args) => (
    <CommentItem {...args} />
)

const normalArgs = {
    comment: {
        id: '1',
        text: 'Text',
        user: {
            id: '1',
            username: 'user',
            avatar: 'https://avt-5.foto.mail.ru/mail/olgalixa/_avatar180?',
        },
    },
}

export const Normal = Template.bind({})
Normal.args = normalArgs

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = normalArgs
NormalRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}
