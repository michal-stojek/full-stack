const Path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "api": "./src/index.ts",
        "api.min": "./src/index.ts"
    },
    output: {
        filename: "[name].js",
        path: Path.resolve(__dirname, "lib"),
        library: "api",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js" ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};
