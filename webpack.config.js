const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const config = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(htm|html)$/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
                use: 'url-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=819200&name=img/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        alias: {} //配置别名可以加快webpack查找模块的速度
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Tims blogs',
            template: './main.html',
            filename: './index.html',
            chunks: ['main', 'vender']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[hash].css',
            chunkFilename: "style.[hash].css"
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/css',
            to: __dirname + '/dist/css'
        }])
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                vender: {
                    chunks: 'all', // 
                    name: 'vender', // 入口的entry的key
                    enforce: true   // 强制
                },
                main: {
                    chunks: 'all', // 
                    name: 'main', // 入口的entry的key
                    enforce: true   // 强制
                }
            }
        }
    }
};

module.exports = function () {
    const prefix = devMode ? 'dev' : 'prod';
    return require(`./webpack.${prefix}.js`)(config);
};