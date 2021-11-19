const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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