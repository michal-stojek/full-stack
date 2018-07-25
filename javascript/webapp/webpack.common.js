const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|eot|woff|ttf)$/i,
                use: [ {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                        outputPath: "static",
                    }
                } ],
            },
        ]
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js" ]
    },
    plugins: [
        new CleanWebpackPlugin("dist"),
        new HtmlWebpackPlugin({
            filename: "./index.htm",
            template: "./src/index.htm"
        })
    ]
};
