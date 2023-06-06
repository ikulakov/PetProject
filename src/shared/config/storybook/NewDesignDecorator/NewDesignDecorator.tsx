import { Story } from '@storybook/react'
import { getAllFeatureFlags, setFeatureFlags } from '@/shared/lib/features'

export const NewDesignDecorator = (ComponentStory: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true })
    return (
        <div className="App_redisigned">
            <ComponentStory />
        </div>
    )
}
