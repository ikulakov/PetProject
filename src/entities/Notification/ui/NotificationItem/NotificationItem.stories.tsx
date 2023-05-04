import { StoryFn, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as StoryObj<typeof NotificationItem>;

const Template: StoryFn<typeof NotificationItem> = (args) => <NotificationItem { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
    item: {
        id: '1',
        title: 'title',
        description: 'description'
    }
};
