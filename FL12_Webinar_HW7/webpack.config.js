const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    // context: path.resolve(__dirname, "src"),
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/app.js'
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
        new HtmlWebpackPlugin({
        template: "index.html",
    }
    )],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    // options: {
                    //     publicPath: 'scss'
                    // }},
                    // 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    devServer: {
        open: true,
        contentBase: './dist',
        // port: 4000,
    }
    
}