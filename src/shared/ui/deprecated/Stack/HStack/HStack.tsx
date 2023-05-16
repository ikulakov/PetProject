import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

/**
 * Устарел используем новый компонент из папки designed
 * @deprecated
 */

export const HStack = (props: HStackProps) => {
    return (
        <Flex
            direction="row"
            {...props}
        />
    )
}
