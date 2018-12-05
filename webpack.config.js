const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
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
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader'], // 编译顺序从右往左
            //     exclude: /node_modules/
            // },
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
        extensions: ['.tsx', '.ts', '.js', '.scss']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: 'Tims blogs',
            template: './main.html',
            filename: './index.html',
            chunks: ['main'],
            minify: {
                minimize: true,
                removeConments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            Proper: 'popper.js',
        }),
        new OptimizeCss({
            cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            },
            canPrint: true //是否将插件信息打印到控制台
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        port: 4747,
        hot: true,
        hotOnly:true，
        open: false,
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist")
    }
};
