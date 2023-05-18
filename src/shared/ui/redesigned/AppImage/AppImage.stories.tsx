import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppImage } from './AppImage'
import { Skeleton } from '../../deprecated/Skeleton'

export default {
    title: 'shared/redesigned/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
    src: 'https://mobimg.b-cdn.net/v3/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg?w=1470&r=0.5625',
    alt: 'test',
    fallback: (
        <Skeleton
            width={'auto'}
            height={200}
        />
    ),
    width: 'auto',
    height: 200,
}
