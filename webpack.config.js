const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   entry: './src/app.js',
   output: {
     path: path.resolve('dist'),
     filename: 'index_bundle.js'
   },
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: "babel-loader"
       }, {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         use: "babel-loader"
       }
     ]
   },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html', //relative to root of the application
            inject: 'body'
        })
        ]
 }