const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const config = {
    devtool: "inline-source-map",
    devServer: {
        port: 4747,
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist/blog")
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

module.exports = function (defaultConfig) {
    return merge(defaultConfig, config);
};