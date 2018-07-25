const merge = require("webpack-merge");
const Webpack = require("webpack");
const WebpackChunkHash = require("webpack-chunk-hash");
const Path = require("path");

const common = require("./webpack.common.js");

module.exports = merge(common, {
   mode: "production",
   output: {
      filename: "[name].[chunkhash].js",
      path: Path.resolve(__dirname, "dist"),
   },
   plugins: [
      new Webpack.optimize.ModuleConcatenationPlugin(),
      new WebpackChunkHash(),
   ]
});
