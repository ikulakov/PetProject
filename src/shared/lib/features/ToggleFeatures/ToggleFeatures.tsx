import { ReactElement, memo } from 'react'
import { FeatureFlags } from '../../../types/featureFlags'
import { getFeatureFlags } from '../setGetFeatures'

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags
    on: ReactElement
    off: ReactElement
}

export const ToggleFeatures = memo((props: ToggleFeaturesProps) => {
    const { feature, on, off } = props

    console.log(getFeatureFlags(feature))

    if (getFeatureFlags(feature)) {
        return on
    }

    return off
})
