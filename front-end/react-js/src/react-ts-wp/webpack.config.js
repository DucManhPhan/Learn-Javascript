const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


const assets = [{
        from: '/assets',
        to: 'assets'
    }
];

/**
 * https://webpack.js.org/configuration/
 * 
 */
module.exports = {

    // webpack will take the files from ./src/index
    entry: [
        // 'webpack-dev-server/client?http://localhost:3000',
        // 'webpack/hot/only-dev-server',
        // 'react-hot-loader/patch',
        './src/index.tsx'
    ],

    // and output it into /dist as bundle.js
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    // adding .ts and .tsx to resolve. extension will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            // 'react-dom': "@hot-loader/react-dom"
        }
    },

    module: {
        rules: [
            // use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.ico?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './'
                    }
                }]
            }
        ]
    },

    // To config dev server in webpack, refer the below link:
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        inline: false,
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        host: 'localhost',
        port: 3000,
        hot: true,
        open: true,

        // Live-reloading happens when we make changes to code
        // dependency pointed to by 'entry' parameter.
        // To make live reloading happen even when changes are made
        // to  the static html  page in 'contentBase', add 'watchContentBase'.
        watchContentBase: true,

        // The stats option let us control what bundling information to display
        stats: {
            children: false,    // hide children information
            maxModules: 0       // set the maximum number of modules to be shown
        },

        // This is where webpack-dev-server serves our bundle
        // which is created in memory.
        publicPath: './dist'
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new FaviconsWebpackPlugin('./assets/images/favicon.ico'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin(assets)
    ]
}


/**
 * Refer link: 
 * https://medium.com/@Ahmad.Asaad/webpack-dev-server-hot-module-replacement-hmr-and-source-maps-easing-the-pain-e7cee99e3bdf
 * https://gaearon.github.io/react-hot-loader/getstarted/
 * 
 * In order for hot reload to work with webpack-dev-server, we should
 * tell it to enable the 'hot' option.
 * We need to add '--hot' to the 'start' script in package.json
 * 
 * // package.json
 * "start": "webpack-dev-server --mode -development --hot"
 * 
 * But nothing happens.
 * 
 * Basically hot reload feature is enabled but it doesn't know how to hot reload
 * react code, we need to tell it how.
 * 
 * 1. Install 'react-hot-reload' package
 * npm install --save-dev react-hot-reload
 * 
 * 2. Add 'react-hot-loader/babel' to our '.babelrc'
 * // .babelrc
 * {
 *      "plugins": ["react-hot-loader/babel"]
 * }
 * 
 * 3. Make our root component as hot-exported
 * // App.tsx
 * // App.js
 *  import React, { Component } from "react";
 *  import { hot } from 'react-hot-loader';
 *
 *
 *  class App extends Component {
 *      render() {
 *          return (
 *              <div>
 *                  <h1>My React App!</h1>
 *              </div>
 *          );
 *      }
 *  }
 *
 *  export default hot(module)(App);
 * 
 */
// https://www.npmjs.com/package/react-hot-loader