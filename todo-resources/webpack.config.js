module.exports = {
    entry: "./src/main/javascript/main.js",
    output: {
        path: __dirname + "/target/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};