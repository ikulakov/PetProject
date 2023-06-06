import { Story } from '@storybook/react'
import { setFeatureFlags } from '@/shared/lib/features'
import { FeatureFlags } from '@/shared/types/featureFlags'

export const FeatureFlagsDecorator =
    (features: FeatureFlags) => (ComponentStory: Story) => {
        setFeatureFlags(features)
        return <ComponentStory />
    }
