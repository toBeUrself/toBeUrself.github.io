const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const config = {
    devtool: "inline-source-map",
    devServer: {
        port: 4747,
        hot: true,
        hotOnly: true,
        open: true,
        compress: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist")
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

module.exports = function () {
    return require("./webpack.config.js")(config);
};