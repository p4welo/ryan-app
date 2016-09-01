const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const entryFile = path.resolve(__dirname, '../src/index.js');
const outputPath = path.resolve(__dirname, '../bin');
const outputFile = 'bundle.js';

module.exports = {
    entry: [
        entryFile
    ],
    output: {
        path: outputPath,
        filename: outputFile
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['ng-annotate', 'nginject?deprecate', 'babel']
            },
            {
                test: /\.html$/,
                loader: 'html?attrs=false'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        })
    ]
};