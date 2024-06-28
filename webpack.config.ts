const path = require('path');

const { DefinePlugin }          = require('webpack');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const { VueLoaderPlugin }       = require('vue-loader');
const TsConfigPathPlugin        = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const SvgSprite              = require('svg-sprite-loader/plugin');

module.exports = function () {


    return {
        devtool: 'eval-cheap-source-map',
        mode: 'development',

        entry: path.resolve(__dirname, 'src/index.ts'),
        output: {
            path                : path.resolve(__dirname, 'dist'),
            clean               : true,
            filename            : '[name][contenthash].js',
            assetModuleFilename : 'images/[hash][ext][query]',
            publicPath          : '/'
        },

        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json'],
            plugins: [new TsConfigPathPlugin()]
        },

        module: {
            rules: [
                {
                    test: /.ts$/,
                    use: [
                        'babel-loader',
                        {
                            loader: 'ts-loader',
                            options: {
                                appendTsSuffixTo: [/\.vue/],
                                transpileOnly: true
                            }
                        }
                    ]
                },

                {
                    test: /\.vue/,
                    use: 'vue-loader'
                },

                {
                    test: /\.s?css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                additionalData: `
                                    @import "styles/_variables.scss";
                                    @import "styles/_bem-mixin.scss";
                                    @import "styles/_medias.scss";
                                `
                            }
                        },
                        {
                            loader: "postcss-loader",
                        },
                    ]
                },
                {
                    test: /\.(png|jpg|svg|gif)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.(woff,woff2,eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.svg$/,
                    type: 'asset/inline',
                    loader: 'svg-sprite-loader',
                    options: {
                        extract: true,
                        spriteFilename: './icons.svg', // this is the destination of your sprite sheet
                        publicPath: '/'
                    }
                }
            ]
        },

        plugins: [
            new SvgSprite({
                plainSprite: true
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                title: "CuttleSystems",
                filename: "index.html",
            }),
            new MiniCssExtractPlugin({
                filename:  '[name].css',
            }),
            new VueLoaderPlugin(),
            new DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development')
                },

                __VUE_OPTIONS_API__: JSON.stringify(true),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(true)
            })
        ],

        devServer: {
            hot: true,
            historyApiFallback: true,
            static: path.resolve(__dirname, "public"),
            compress: true,
            open: true,
            port: "auto",
            client: {
                overlay: true,
            },
        },

        optimization: {
            moduleIds: "deterministic",
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        priority: -10,
                        chunks: "all",
                    },
                },
            },
        },

        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }

    }
}