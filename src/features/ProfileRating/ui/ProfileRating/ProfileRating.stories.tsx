import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import ProfileRating from './ProfileRating'

export default {
    title: 'features/Profile/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof ProfileRating>

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating { ...args } />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
