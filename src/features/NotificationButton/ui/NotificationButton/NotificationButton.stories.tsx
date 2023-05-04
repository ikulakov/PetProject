import { StoryFn, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationButton } from './NotificationButton';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as StoryObj<typeof NotificationButton>;

const Template: StoryFn<typeof NotificationButton> = (args) => <div style={{backgroundColor: 'var(--primary-color)', padding: '10px'}}><NotificationButton { ...args } /></div>

export const Normal = Template.bind({});
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { id: '1', title: 'Title 1', description: 'Description 1' },
                { id: '2', title: 'Title 2', description: 'Description 2' },
                { id: '3', title: 'Title 3', description: 'Description 3' },
                { id: '4', title: 'Title 4', description: 'Description 4' },
            ]
        }
    ]
}