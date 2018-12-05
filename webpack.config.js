const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    entry: {
        main: './src/main.js',
        vender: [/*'lodash',*/ 'jquery'] // 多个页面所需的公共库文件，防止重复打包带入
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        globalObject: "this"
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
                    MiniCssExtractPlugin.loader,
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
        new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Tims blogs',
            template: './main.html',
            filename: './index.html',
            chunks: ['main', 'vender']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash' //所有页面都会引入 _ 这个变量，不用再import引入
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[hash].css',
            chunkFilename: "styles.[hash].css"
        }),
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
                    chunks: 'initial', // 
                    name: 'vender', // 入口的entry的key
                    enforce: true   // 强制
                },
                main: {
                    chunks: 'initial', // 
                    name: 'main', // 入口的entry的key
                    enforce: true   // 强制
                }
            }
        }
    }
};

module.exports = function (defaultConfig) {
    return merge(defaultConfig, config);
};