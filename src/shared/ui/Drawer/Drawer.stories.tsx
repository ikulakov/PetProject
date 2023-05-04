import { StoryFn, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as StoryObj<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => <Drawer { ...args } />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children: "Контент"
};
