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
        extensions: [".ts", ".tsx", ".js", ".json"]
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
      }

    
    
        

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