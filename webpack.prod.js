const merge = require("webpack-merge");
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

var config = {
    devtool: "source-map",
    plugins: [
        new OptimizeCss({
            cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            },
            canPrint: true //是否将插件信息打印到控制台
        }),
    ]
};

module.exports = function () {
    return require("./webpack.config.js")(config);
};