import { StoryFn, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/notifications';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as StoryObj<typeof NotificationList>;

const Template: StoryFn<typeof NotificationList> = (args) => <NotificationList { ...args } />;

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