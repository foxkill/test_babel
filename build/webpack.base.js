const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "../lib"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'exports-loader?global.fetch!whatwg-fetch'
        }),
    ]
}