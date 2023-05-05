import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Text',
            user: {
                id: '1',
                username: 'user',
                avatar: 'https://avt-5.foto.mail.ru/mail/olgalixa/_avatar180?',
            },
        },
        {
            id: '2',
            text: 'Text 2',
            user: {
                id: '2',
                username: 'user 2',
                avatar: 'https://avt-5.foto.mail.ru/mail/olgalixa/_avatar180?',
            },
        },
    ],
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}
