const merge = require("webpack-merge");
const Path = require("path");

const common = require("./webpack.common.js");

module.exports = merge(common, {
   mode: "development",
   devtool: "inline-source-map",
   output: {
      filename: "[name].js",
      path: Path.resolve(__dirname, "dist"),
   }
});
