const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const proxyUrl = 'amorphous.local';

const webpackConfig = {
    //debug: true, // removed in 2
    //devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        './assets/scripts/custom/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), // the target directory for all output - files must be an absolute path
        filename: 'bundle.js', // the filename template for entry chunks - https://webpack.js.org/configuration/output/#output-filename
        publicPath: '/' // // the url to the output directory resolved relative to the HTML page
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 'sass-loader'
                    ]
                })
            }
        ]
        /*rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'assets/scripts/custom'),
                //exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },*/
            /*{
                test: /\.scss$/,
                // processed in reverse order, like fn calls - styleLoader(cssLoader(sassLoader('source')))
                use: [
                    'style-loader', // outputs our CSS into a <style> tag in the document
                    'css-loader', // parses the CSS into JavaScript and resolves any dependencies
                    'sass-loader' // transforms Sass into CSS
                ]
            },*/

            //{test: /\.css$/, use: [ { loader: 'style-loader' }, {loader: 'css-loader', options: {modules: true} } ] },
            //{test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
            /*{
                test: /(\.css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },*/
            //{test: /\.(sass|scss)$/, loader: "style-loader!css-loader!sass-loader"},
            /*{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}*/
        //]
    },
    plugins: [
        //new webpack.LoaderOptionsPlugin({
            //debug: true
        //}),
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin(),
        new BrowserSyncPlugin({
            proxy: proxyUrl,
            files: [
                '**/*.php'
            ],
            reloadDelay: 0
        })
    ]
};

module.exports = webpackConfig;