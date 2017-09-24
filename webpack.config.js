const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');



module.exports = {
    entry: './src/index.tsx',
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
  },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias:{
            Common: path.resolve(__dirname, 'src/Common'),
            Components: path.resolve(__dirname, 'src/Components'),
            Reducers: path.resolve(__dirname, 'src/Reducers'),
            Routes: path.resolve(__dirname, 'src/Routes'),
            Images: path.resolve(__dirname, 'assets/images'),
            src: path.resolve(__dirname, 'src')
        }
    },


    module:{
        rules: [
            {
                test: /\.(tsx|ts|js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
         {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader" 
        }, {
            loader: "sass-loader" 
        }]
       
      }, 
      {
          test: /\.png$/,
          use: [
              {
               loader: 'file-loader',
               options: {
                   name: '[path][hash].[ext]',
                   outputPath: 'img/'
                   
               }
              }
          ]
      },


    
        

        ]
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        host: '0.0.0.0',
        port: 3333,
        stats: "errors-only",
        compress: true,
        port: process.env.PORT,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    },
    plugins: [new HtmlWebpackPlugin({
         template: './src/index.html'
    }),
     new ExtractTextPlugin('style.css')
    ]
}