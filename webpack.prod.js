const webpack = require('webpack');
const merge = require("webpack-merge");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var config = {
    devtool: "source-map",
    plugins: [
        new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new OptimizeCss({
            cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            },
            canPrint: true //是否将插件信息打印到控制台
        }),
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            minRatio: 0.8
        })
    ]
};

module.exports = function (defaultConfig) {
    return merge(defaultConfig, config);
};