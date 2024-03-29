import ReactRefreshTypeScript from 'react-refresh-typescript'
import type webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true, // кастомизация размеров
                svgoConfig: { // currentColor заменяет fill на currentColor
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }]
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
