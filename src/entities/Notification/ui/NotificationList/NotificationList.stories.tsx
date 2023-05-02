import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Notification } from '@/entities/Notification/model/types/notifications';
import withMock from 'storybook-addon-mock';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock]
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList { ...args } />;

const notification: Notification = {
    id: '1',
    description: 'Description',
    title: 'Title'
}

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
                { ...notification, id: '1' },
                { ...notification, id: '2' },
                { ...notification, id: '3' }
            ]
        }
    ]
}

export const IsLoading = Template.bind({});
IsLoading.args = {}
IsLoading.decorators = [StoreDecorator({})]
IsLoading.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notification, id: '1' },
                { ...notification, id: '2' },
                { ...notification, id: '3' }
            ],
            delay: 4000
        }
    ]
}