/* eslint-disable @typescript-eslint/no-unused-vars */
export type Mods = Record<string, boolean | string | undefined>

export function classNames (
    cls: string,
    mods: Mods = {},
    aditional: (string | undefined)[] = []
): string {
    return [
        cls,
        ...aditional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}
