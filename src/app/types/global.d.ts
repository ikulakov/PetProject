declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classnames: IClassNames
    export = classnames
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.png'
declare module '*.jp?eg'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API__: string

declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>
} : T
