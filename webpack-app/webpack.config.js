const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // step 3. injects styles into DOM
                    "css-loader", // step 2. turns css to commonjs
                    "sass-loader" // step 1. turns sass to css
                ]

            }
        ]
    }
};