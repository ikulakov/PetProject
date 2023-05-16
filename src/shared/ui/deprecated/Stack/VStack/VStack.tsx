import { Flex, type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

/**
 * Устарел используем новый компонент из папки designed
 * @deprecated
 */

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props
    return (
        <Flex
            {...props}
            direction="column"
            align={align}
        />
    )
}
