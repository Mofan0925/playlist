const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',    //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }]
        },{
            test: /\.css$/,
            use: [ 'style-loader' ,'css-loader' ]
        }]
    },
    devServer: {
        open: true,
        port: 8080
    }
};
