webpack = require('webpack');
//noinspection JSAnnotator
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig = {
    context: __dirname,
    entry: {
        styles: './static/main.scss'
    },
    output: {
        path: './static/build',
        library: '[name]',
        filename: '[name].css'
    },
    devtool: '#cheap-module-source-map',
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ]
};
module.exports = webpackConfig;