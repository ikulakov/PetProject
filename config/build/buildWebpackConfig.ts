import type webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        watchOptions: {
            ignored: /node_modules/,
        },
        module: {
            rules: buildLoaders(options),
            parser: {
                javascript: {
                    reexportExportsPresence: false
                }
            } //
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}
