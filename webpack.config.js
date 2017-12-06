let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'src/server/static/assets/js');
let APP_DIR = path.resolve(__dirname, 'src/client/app');
let SERVER_DIR = path.resolve(__dirname, 'src/server/static');

let config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
        publicPath: '/assets/js'
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
            }, {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        port: 3000,
        contentBase: SERVER_DIR
    },
    resolve: {
        extensions: ['.js','.jsx', '.css']
    },

    watch: true
};

module.exports = config;