const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'blog-v2')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'blog-v2'),
        compress: true,
        open: true,
        hot: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            title: 'test title by plugin',
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            vue: 'Vue',
            marked: 'marked',
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'style-loader',
                'css-loader'
            ]
        }, { 
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    // externals: {
    //     vue: 'Vue',
    //     'vue-router': 'VueRouter'
    // }
};