type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, aditional: string[] = []): string {
    return [
        cls,
        ...aditional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}
