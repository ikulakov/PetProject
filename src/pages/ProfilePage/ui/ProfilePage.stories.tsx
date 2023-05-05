import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import ProfilePage from './ProfilePage'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,

    loaders: [],
    parameters: {
        reactRouter: {
            routePath: '/articles/:id',
            routeParams: { id: '1' },
        },
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: '123',
                age: 30,
                country: Country.Russia,
                lastname: 'Kulakov',
                first: 'Ivan',
                city: 'Moscow',
                currency: Currency.RUB,
                avatar: 'https://avt-5.foto.mail.ru/mail/olgalixa/_avatar180?',
            },
        },
    }),
]
