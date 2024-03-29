declare module '*.scss' {
    const classes: Record<string, string>
    export default classes
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.png'
declare module '*.jp?eg'
declare module '*.jpg'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API__: string
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'

declare type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>
      }
    : T
