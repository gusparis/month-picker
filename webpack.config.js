let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, '.');
let APP_DIR = path.resolve(__dirname, 'src');

let config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            }
        ]
    },
    plugins: [
    ],
    resolve: {
        extensions: ['.js','.jsx']
    },

    watch: true
};

module.exports = config;