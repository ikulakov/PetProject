import { StoryFn, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as StoryObj<typeof StarRating>;

const Template: StoryFn<typeof StarRating> = (args) => <StarRating { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
