let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'src/server/static/assets/js');
let APP_DIR = path.resolve(__dirname, '.');

let config = {
    entry: APP_DIR + "/src/client/app/index.jsx",
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["es2015", "react", "stage-0"]
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(APP_DIR, "src/client/app"),
            "node_modules"
        ]
    },
    watch: true
};

module.exports = config;