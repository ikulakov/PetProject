import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import ReactRefreshTypeScript from 'react-refresh-typescript'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        // use: 'ts-loader',
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
                    }),
                    transpileOnly: isDev
                }
            }
        ]
    }

    const cssLoader = buildCssLoader(isDev)

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ]
}
