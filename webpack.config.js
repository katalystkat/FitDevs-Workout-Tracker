const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?/, 
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  } 
                },
              },
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modules)/,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            filename: './index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: './client/stylesheets/styles.css'}],
        }),
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
        // What is historyApiFallback? 
        static: {
            directory: path.join(__dirname, './build'),
            publicPath: '/',
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
    //     proxy: {
    //       '/api': {
    //       target: 'http://localhost:3000',
    //       pathRewrite: { '^/api': '' },
    //   },
    // },

    },
    devtool: 'eval-source-map',
}