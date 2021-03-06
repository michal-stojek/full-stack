const merge = require("webpack-merge");
const Webpack = require("webpack");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new Webpack.optimize.ModuleConcatenationPlugin(),
    ]
});
