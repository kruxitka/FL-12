const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: "development",
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js',
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
        template: "index.html",
    }
    )
],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
            test: /\.s[ac]ss$/i,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                'css-loader',
                'sass-loader'
            ]
            }
        ]
    },
    devServer: {
        contentBase: './dist'  
    }
};