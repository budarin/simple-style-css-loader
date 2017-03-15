const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    watch: true,
    devtool: 'eval',
    cache: true,
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader/useable',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name].[local]_[hash:base64:7]',
                            minimize: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'Test APP',
            filename: 'index.html',
            template: path.resolve(__dirname, 'assets', 'index.html')
        })
    ],
    devServer: {
        publicPath: '',
        contentBase: "dist",
        compress: true,
        port: 3000
    }
};