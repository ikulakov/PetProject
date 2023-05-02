import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock]
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton { ...args } />;

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