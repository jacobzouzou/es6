const path = require('path');
// const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, options) => {
    return {
        mode: "development",
        entry: './src/promise-async/async.js',

        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js',
        },
        /*.. map is mandatory .*/
        devtool: 'inline-source-map',
        /*...*/
        module: {
            rules: [
                { test: /\.css$/, use: 'css-loader' },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images/'
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
        ],

    }
};