type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, aditional: string[]): string {

    return [
        cls,
        ...aditional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key, _]) => key)
    ]
    .join(' ')
}