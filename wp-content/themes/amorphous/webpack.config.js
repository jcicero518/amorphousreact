"use strict";

const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = require('./assets/config.json');

const webpackConfig = {
    //devtool: 'inline-source-map',
    entry: [
        './assets/scripts/custom/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), // the target directory for all output - files must be an absolute path
        filename: 'bundle.js', // the filename template for entry chunks - https://webpack.js.org/configuration/output/#output-filename
        publicPath: '/' // // the url to the output directory resolved relative to the HTML page
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //include: path.resolve(__dirname, 'assets/scripts/custom'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            importLoaders: 1,
                            plugins: () => ([
                                require('lost')
                            ])
                        }
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader',
                        'postcss-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        //new webpack.LoaderOptionsPlugin({
            //debug: true
        //}),
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin(),
        new BrowserSyncPlugin({
            proxy: config.proxyUrl,
            files: [
                '**/*.php'
            ],
            reloadDelay: 0
        })
    ]
};

module.exports = webpackConfig;